import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {HeartIcon } from "@heroicons/react/24/solid";

function Detail() {
  const { categoryTypeName, idDetail } = useParams();
  const [movie, setMovie] = useState(null);
  const urlImage = "https://image.tmdb.org/t/p/w220_and_h330_face";
  const headerKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZThhM2Y0YmNiMTAyYTlmNWMzNDFjOTI2MzE4NDY4ZSIsInN1YiI6IjY1MTQyMWE1Y2FkYjZiMDJjMWQwMTZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ppSO9fAZwRBNBHCVa50JvbdWa9iUn1fSbm98knMcCeg";

  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  const [favorites, setFavorites] = useState(storedFavorites);

  const [isLiked, setIsLiked] = useState(favorites.includes(parseInt(idDetail)));

  const likeIcon = `w-6 h-6 mx-8 cursor-pointer  text-amber-500 
  ${isLiked ? "text-red-700" : "text-amber-500"}`;

  if (categoryTypeName == "movie") {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: headerKey,
            },
          };

          const movieResultArray = await fetch(
            `https://api.themoviedb.org/3/movie/${idDetail}?language=en-US`,
            options
          ).then((res) => {
            return res.json();
          });
          setMovie(movieResultArray);
        } catch (error) {}
      };

      fetchData();
    }, [idDetail]);
  } else {
  }

  const handleLike = () => {
    const updatedFavorites = favorites.includes(parseInt(idDetail))
      ? favorites.filter((id) => id !== parseInt(idDetail))
      : [...favorites, parseInt(idDetail)];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    setIsLiked(!isLiked);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div
          className="bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${urlImage}${movie?.backdrop_path})`,
          }}
        >
          <div className="bg-white p-5 rounded-b-lg shadow-2xl bg-opacity-50">
            <div className="flex">
              <img
                className="max-w-full h-auto border-2 divide-solid border-white rounded-b-lg shadow-lg"
                src={urlImage + (movie?.poster_path || "")}
                alt=""
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-slate-900">
                  {movie?.title || "Loading..."}{" "}
                  <span className="text-base text-slate-800">
                    ({movie?.release_date?.split("-")[0] || "Loading..."})
                  </span>
                </h1>
                <div className="flex items-center mt-1 pt-5">
                  <p className="text-base text-slate-800">
                    Rating: {movie?.vote_average || "Loading..."}
                  </p>
                  <span className="mx-2 text-slate-800">|</span>
                  <p className="text-base text-slate-800">
                    Votes: {movie?.vote_count || "Loading..."}
                  </p>

                  <div className="text-slate-800 pl-8">
                    <svg
                      className={likeIcon}
                      aria-hidden="true"
                      fill="currentColor"
                      onClick={handleLike}
                    >
                      <HeartIcon title="Favorite" />
                    </svg>
                  </div>
                </div>
                <p className="text-base text-slate-800 pt-8">
                  {movie?.overview || "Loading..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
