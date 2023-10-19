import { useContext, useEffect, useState } from "react";
import { ContextUrl } from "../components/StoreUrl";
import { useFetch } from "../components/useFetch";
import BodyWhitCards from "../components/bodyWhitCards";

function Home() {
  const [state, setState] = useContext(ContextUrl);
  state.categoryTypeName = "movie";
  state.categoryGenderId = "";
  state.params.whit_genres = "";

 

  const { data, loadingApi, errorApi } = useFetch(state);

  const [dataApi, setDataApi] = useState([]);


  useEffect(() => {
    setDataApi(data.results);

  }, [data]);



  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  
  const [favorites, setFavorites] = useState(storedFavorites || []);

 
  return (
    <>
      <BodyWhitCards
        dataFetch={dataApi}
        loadingHome={loadingApi}
        errorApi={errorApi}
        urlImage={state.urlImage}
        favorites={favorites}
        setFavorites={setFavorites}
        removeFavorite={null}
      />
    </>
  );
}

export default Home;
