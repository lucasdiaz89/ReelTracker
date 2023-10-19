import { useState, useEffect } from "react";

export function useFetch(stateLink) {
  const [data, setData] = useState({ results: [] });  
  const [loadingApi, setLoadingApi] = useState(true);
  const [errorApi, setErrorApi] = useState(null);
  const errorComingSoon = "";


  useEffect(() => {

  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: stateLink.headerKey,
      },
    };
    
    const obligator="include_adult="+stateLink.params.include_adult+"&include_video="+stateLink.params.include_video+"&language="+stateLink.params.language+"&page="+stateLink.params.page+"&sort_by="+stateLink.params.sort_by+"&with_genres="
    
    const newUrl=stateLink.url + stateLink.categoryTypeName+"?"+obligator+stateLink.categoryGenderId;

    setData({ results: [] });
  

    if (stateLink.url !="") {
      const delay = 3000;
      
      setLoadingApi(true);
      const fetchData = () => {
        setData({ results: [] });
        fetch(newUrl, options)
          .then((response) => response.json())
          .then((json) => {
            setData(json);
            setLoadingApi(false);
            setErrorApi("");
          })
          .catch((error) => {
            setErrorApi(errorApi);
            setLoadingApi(false);
          });
      };
      const timeoutId = setTimeout(fetchData, delay);
      return () => clearTimeout(timeoutId);
    } else {
      setErrorApi("ComingSoon");
      setData({ results: [] });
      setLoadingApi(false);
    }
  }, [stateLink]);


  return { data, loadingApi, errorApi };
}
