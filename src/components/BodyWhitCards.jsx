import Cards from "./Cards";
import { useEffect, useState, useRef } from "react";
import "./BodyWhitCards.css";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/solid";
import Loading from "./Loading";
import ComingSoon from "../views/ComingSoon";
import NotFound from "../views/NotFound";

function BodyWhitCards({
  categoryTypeName,
  dataFetch,
  loadingHome,
  errorApi,
  urlImage,
  favorites,
  setFavorites,
  removeFavorite,
}) {

  const loadingApi=loadingHome;
  const containerRef = useRef(null);
  const searchRef = useRef("");

  const [currentPage, setCurrentPage] = useState(1);
  const [blurredIndex, setBlurredIndex] = useState(5);
  const [blurredClass, setBlurredClass] = useState("w-1/5");

  const pageSize = 20;
  //const totalPageApi=data.total_pages;

  const [dataApi, setDataApi] = useState(dataFetch || []);
  const [filterDataApi, setFilterDataApi] = useState(dataApi);
  // const actualPage=data.page;
  // let previousPage=0;
  // let nextPage=0;

  // if(totalPageApi>1){
  //   previousPage=actualPage-1;
  //   nextPage=actualPage+1;
  // }

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const dataToShow = Array.isArray(filterDataApi)
    ? filterDataApi.slice(startIndex, endIndex)
    : [];

  const hasNextPage =
    endIndex < Array.isArray(filterDataApi) ? filterDataApi.length : null;
  const hasPreviousPage = currentPage > 1;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const updateBlurredIndex = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 521) {
      setBlurredIndex(1);
      setBlurredClass("w-1/1");
    } else if (screenWidth >= 521 && screenWidth < 640) {
      setBlurredIndex(2);
      setBlurredClass("w-1/2");
    } else if (screenWidth >= 640 && screenWidth < 768) {
      setBlurredIndex(3);
      setBlurredClass("w-1/3");
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setBlurredIndex(4);
      setBlurredClass("w-1/4");
    } else {
      setBlurredIndex(5);
      setBlurredClass("w-1/5");
    }
  };

  useEffect(() => {
    setFilterDataApi(dataFetch);
    setDataApi(dataFetch);
    searchRef.current.value = "";
  }, [dataFetch]);

  useEffect(() => {
    const handleScroll = () => {
      const blurredMovies = containerRef.current.querySelectorAll(
        ".blurred-movie:not(.blurred)"
      );
      blurredMovies.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const threshold = window.innerHeight * 0.7;
        if (rect.top <= threshold) {
          el.style.filter = "blur(0px)";
          el.classList.add("blurred");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    const initiallyFocusedMovies =
      containerRef.current.querySelectorAll(".blurred-movie");

    initiallyFocusedMovies.forEach((el) => {
      el.style.filter = "blur(7px)";
      el.classList.add("blurred");
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateBlurredIndex);
    updateBlurredIndex();

    return () => {
      window.removeEventListener("resize", updateBlurredIndex);
    };
  }, []);

  const loadingCards = Array.from({ length: pageSize }, (_, index) => (
    <Loading key={index} />
  ));

  const handlerFilter = (value) => {
    if (value === "") {
      setFilterDataApi(dataApi);
    } else {
      const leakedData = dataApi.filter((valor) => {
        const titleOrName = valor.title || valor.name || "";
        return titleOrName.toUpperCase().includes(value.toUpperCase());
      });
      setFilterDataApi(leakedData);
      const allMovies = containerRef.current.querySelectorAll(".blurred-movie");
      allMovies.forEach((el) => {
        el.style.filter = "blur(0px)";
        el.classList.remove("blurred");
      });
    }
  };

  return (
    <div className="main-content">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="w-3/4">
            <input
              ref={searchRef}
              onChange={(e) => handlerFilter(e.target.value)}
              type="search"
              className="block w-full px-4 py-2 text-stone-200 bg-slate-800 border dark:text-stone-900 dark:bg-slate-200 rounded-xl focus:border-slate-800 focus:ring-slate-900 dark:focus:border-slate-400 dark:focus:ring-slate-400 focus:outline-none focus:ring focus:ring-opacity-40 text-center"
              placeholder="FILTER FOR TITLE"
            />
          </div>
        </div>
        <div ref={containerRef}>
          <ul className="flex flex-wrap">
            {loadingApi ? (
              loadingCards
            ) : errorApi ? (
              <li>{errorApi === "ComingSoon" ? <ComingSoon /> : <NotFound />}</li>
            ) : dataToShow.length > 0 ? (
              dataToShow.map((item, index) => (
                <li
                  key={item.id}
                  className={`${blurredClass} p-4 ${
                    index >= blurredIndex ? "blurred-movie" : ""
                  }`}
                >
                  <Cards
                    imageUrl={urlImage + (item.poster_path || "")}
                    categoryTypeName={categoryTypeName}
                    title={
                      item.original_title ||
                      item.original_name ||
                      "Title not available"
                    }
                    rating={item.vote_average || "Rating not available"}
                    reviews={item.vote_count || "Reviews not available"}
                    date={
                      item.release_date ||
                      item.first_air_date ||
                      "Release date not available"
                    }
                    idSelection={item.id}
                    favorites={favorites}
                    favoriteBody={favorites.includes(item.id)}
                    setFavorites={setFavorites}
                    removeFavorite={removeFavorite}
                  />
                </li>
              ))
            ):<NotFound />}
          </ul>
        </div>
        <div className="flex justify-center mt-12">
          {hasPreviousPage && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!hasPreviousPage}
            >
              <ArrowLeftCircleIcon className="w-12 h-12" title="Previous" />
            </button>
          )}
          {hasNextPage && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!hasNextPage}
            >
              <ArrowRightCircleIcon className="w-12 h-12" title="Next" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BodyWhitCards;
