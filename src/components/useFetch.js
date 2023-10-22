import { useState, useEffect } from "react";

export function useFetch(urlContext) {
  const [data, setData] = useState({ results: [] });  
  const [loadingApi, setLoadingApi] = useState(true);
  const [errorApi, setErrorApi] = useState(null);
  const errorComingSoon = "";

  useEffect(() => {

  
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: urlContext.headerKey,
      },
    };
    

    setData({ results: [] });
  

    if (urlContext.url !="") {
      const delay = 0;
      
      setLoadingApi(true);
      const fetchData = () => {
        setData({ results: [] });
        fetch(urlContext.urlFetch, options)
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
  }, [urlContext]);


  return { data, loadingApi, errorApi };
}
