import { useState, useContext, useEffect } from "react";
import { ContextUrl } from "../components/StoreUrl";
import { Navigate, useParams } from "react-router-dom";
import { CategoryGender } from "../components/dataMenu";
import BodyWhitCards from "../components/bodyWhitCards";
import { useFetch } from "../components/useFetch";
function Category() {
  
  const { categoryTypeName, categoryGenderName } = useParams();

  const [urlContext, setUrlContext] = useContext(ContextUrl);

  const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  
  const [favorites, setFavorites] = useState(storedFavorites || []);
  

  const categoryData = CategoryGender.find(
    (item) => item.categoryGenderName === categoryGenderName
  );
  if (!categoryData) {
   
    return <Navigate to="/notFound" />;

    
  }
  
  const obligator="include_adult="+urlContext.params.include_adult+"&include_video="+urlContext.params.include_video+"&language="+urlContext.params.language+"&page="+urlContext.params.page+"&sort_by="+urlContext.params.sort_by+"&with_genres="
  urlContext.urlFetch=urlContext.url+categoryTypeName+"?"+obligator+categoryData.categoryGenderIdApi;
  const { data, loadingApi, errorApi } = useFetch(urlContext);


  const [dataApi, setDataApi] = useState(data.results);

  useEffect(() => {
   
  
    setDataApi(data.results);
  }, [data]);

  return (
    <>
      <BodyWhitCards
        categoryTypeName={categoryTypeName}
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

export default Category;
