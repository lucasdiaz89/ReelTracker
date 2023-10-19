import { useEffect, useState } from "react";
import BodyWhitCards from "../components/bodyWhitCards";

function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
const [loading, setLoading] = useState(true);

  const urlImage = "https://image.tmdb.org/t/p/w220_and_h330_face";
  const headerKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZThhM2Y0YmNiMTAyYTlmNWMzNDFjOTI2MzE4NDY4ZSIsInN1YiI6IjY1MTQyMWE1Y2FkYjZiMDJjMWQwMTZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ppSO9fAZwRBNBHCVa50JvbdWa9iUn1fSbm98knMcCeg";


  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const storedFavorites =
          JSON.parse(localStorage.getItem("favorites")) || [];

        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: headerKey,
          },
        };
        if (storedFavorites.length > 0) {
          const imdbIds = await Promise.all(
            storedFavorites.map((id) =>
              fetch(
                `https://api.themoviedb.org/3/movie/${id}/external_ids`,
                options
              ).then((res) =>res.json())
            )
          );

          const movieResultsArray = await Promise.all(
            imdbIds.map((id) =>
              fetch(
                `https://api.themoviedb.org/3/find/${id.imdb_id}?external_source=imdb_id`,
                options
              )
              .then((response) =>response.json())
              
            )
          );

          const flattenedMovieResults = movieResultsArray
            .map((el) => el.movie_results)
            .flat();
          setFavoriteMovies(flattenedMovieResults);
          setFavorites(flattenedMovieResults.map((el) => el.id));
        }
        setLoading(false);
      } catch (error) {}
    };

    fetchData();
    
  }, []);

  const removeFavorite = (elementId) => {
    const updatedFavorites = favorites.filter((id) => id !== elementId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteMovies(
      favoriteMovies.filter((el) => el.id !== elementId)
    );
  };

  return (
    <>
      <BodyWhitCards
        dataFetch={favoriteMovies}
        loadingHome={loading}
        errorApi={null}
        urlImage={urlImage}
        favorites={favorites}
        setFavorites={setFavorites}
        removeFavorite={removeFavorite}
      />
    </>
  );
}

export default Favorites;
