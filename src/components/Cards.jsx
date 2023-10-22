import {
  CalendarDaysIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";

function Cards({
  imageUrl,
  categoryTypeName,
  title,
  rating,
  reviews,
  date,
  idSelection,
  loadingApi,
  favorites,
  favoriteBody,
  setFavorites,
  removeFavorite
}) {
  const cardClasses = `max-w-sm rounded-lg relative dark:border-gray-700 ${
    loadingApi ? "bg-[#f0f0f0]" : ""
  }`;

  const titleClasses = `mb-2 text-xl font-bold tracking-tight  ${
    loadingApi
      ? "text-gray-900 dark:text-gray-500"
      : "text-gray-900 dark:text-white no-underline hover:underline"
  }`;

  const [isLiked, setIsLiked] = useState(favoriteBody);

  const handleLike = () => {
    const updatedFavorites = favorites.includes(idSelection)
      ? favorites.filter((id) => id !== idSelection)
      : [...favorites, idSelection];

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    if (removeFavorite && favorites.includes(idSelection)) {
      removeFavorite(idSelection);
  }

    setIsLiked(!isLiked);
  };

  const likeIcon = `w-6 h-6 top-0 left-1 z-7 cursor-pointer absolute text-amber-500 mr-1 
  ${favoriteBody ? "text-red-700" : "text-amber-500"} 
  ${loadingApi ? "hidden" : ""}  
  `;

  return (
    <>
      <div className={cardClasses}>
        {loadingApi && (
          <div className="w-220 h-330 bg-gray-300 dark:bg-gray-600 rounded-t-lg inset-0 flex items-center justify-center ">
            <div className="animate-pulse">
              <div className="w-full h-full mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="w-full h-20 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              </div>
            </div>
          </div>
        )}

        <img
          className={`rounded-t-lg h-auto ${loadingApi ? "hidden" : ""}`}
          src={imageUrl}
          alt=""
        />
      
        <svg
          className={likeIcon}
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 22 20"
          onClick={handleLike}
        >
          <HeartIcon title="Favorite" />
        </svg>

        <div className="p-5">
          <Link to={`/detail/${categoryTypeName}/${idSelection}`}>            
            <h3 className={titleClasses}>{loadingApi ? "Loading..." : title}</h3>
          </Link>
          {loadingApi ? (
            <div className="animate-pulse">
              <div className="w-full h-4 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="w-full h-4 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="w-full h-4 mt-2 mb-4 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              </div>
              <div className="w-20 h-4 mt-2 ml-8 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            </div>
          ) : (
            <>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-yellow-300 mr-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <StarIcon />
                </svg>
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {rating}
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <p className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                  {reviews} reviews
                </p>
              </div>
              <div className="flex items-center pt-1 pl-7">
                <CalendarDaysIcon className="w-4 h-4" title="Release Date" />
                <p className="text-sm pl-1 font-medium text-gray-700 dark:text-slate-300">
                  {date}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cards;
