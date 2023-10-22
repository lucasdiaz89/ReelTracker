import { useContext, useEffect, useState } from "react";
import { ContextUrl } from "../components/StoreUrl";
import { useFetch } from "../components/useFetch";
import BodyWhitCards from "../components/BodyWhitCards";

function Home() {
  const [urlContext, setUrlContext] = useContext(ContextUrl);

  urlContext.url="https://api.themoviedb.org/3/discover/";
  
  const obligator="include_adult="+urlContext.params.include_adult+"&include_video="+urlContext.params.include_video+"&language="+urlContext.params.language+"&page="+urlContext.params.page+"&sort_by="+urlContext.params.sort_by+"&with_genres="
     
  urlContext.urlFetch=urlContext.url+"movie?"+obligator+"";

  const { data, loadingApi, errorApi } = useFetch(urlContext);

  const [dataApi, setDataApi] = useState([]);


  useEffect(() => {
    setDataApi(data.results);

  }, [data]);



  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  
  const [favorites, setFavorites] = useState(storedFavorites || []);

 
  return (
    <>
      <BodyWhitCards
        categoryTypeName={urlContext.categoryTypeName}
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

export default Home;
