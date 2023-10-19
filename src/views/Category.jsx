import { useState, useContext, useEffect } from "react";
import { ContextUrl } from "../components/StoreUrl";
import { useParams } from "react-router-dom";
import { CategoryGender } from "../components/dataMenu";
import { Navigate } from "react-router-dom";
import BodyWhitCards from "../components/bodyWhitCards";
import { useFetch } from "../components/useFetch";

function Category() {
  
  const { categoryTypeName, categoryGenderName } = useParams();

  const [state, setState] = useContext(ContextUrl);

  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  
  const [favorites, setFavorites] = useState(storedFavorites || []);
  

  const categoryData = CategoryGender.find(
    (item) => item.categoryGenderName === categoryGenderName
  );

  if (!categoryData) {
    return Navigate("/notFound");
  }

  const [url,setUrl]=useState(state);
  
 


  const { data, loadingApi, errorApi } = useFetch(state);

  const [dataApi, setDataApi] = useState(data.results);

  useEffect(() => {
    setDataApi(data.results);
  }, [data]);

  return (
    <>
      <BodyWhitCards
        dataFetch={dataApi}
        loadingHome={loadingApi}
        errorApi={errorApi}
        urlImage={url.urlImage}
        favorites={favorites}
        setFavorites={setFavorites}
        removeFavorite={null}
      />
    </>
  );
}

export default Category;
