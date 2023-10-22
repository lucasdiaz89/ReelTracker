import { useParams } from "react-router-dom";
import { useFetch } from "../components/useFetch";
import { useContext, useEffect, useState } from "react";
import BodyWhitCards from "../components/BodyWhitCards";
import { ContextUrl } from "../components/StoreUrl";

function Results(){
    const { searcherWord } = useParams();

    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));  
    const [favorites, setFavorites] = useState(storedFavorites || []);
    const [urlContext, setUrlContext] = useContext(ContextUrl);
    

    urlContext.url="https://api.themoviedb.org/3/search/movie?query="+searcherWord;
    const obligator="&include_adult="+urlContext.params.include_adult+"&language="+urlContext.params.language+"&page="+urlContext.params.page;
  
    urlContext.urlFetch=urlContext.url+obligator;

  const { data, loadingApi, errorApi } = useFetch(urlContext);

  const [dataApi, setDataApi] = useState(data.results);

  useEffect(() => {
    setDataApi(data.results);
  }, [data]);
  return (
    <>

      <BodyWhitCards
        categoryTypeName="movie"
        dataFetch={dataApi}
        loadingHome={loadingApi}
        errorApi={errorApi}
        urlImage={urlContext.urlImage}
        favorites={favorites}
        setFavorites={setFavorites}
        removeFavorite={null}
      />
    </>
  );
}

export default Results;