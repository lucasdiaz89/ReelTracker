import { createContext, useState } from "react";


const urlInitial={
    url:"https://api.themoviedb.org/3/discover/",
    name:"TMDB",
    categoryTypeName:"movie",
    categoryGenderId:"",//"10752%7C10749%7C27", 
    params:{
        include_adult:"false",
        include_video:"false",
        language:"en-US",
        page:"1",
        sort_by:"popularity.desc",
        whit_genres:"" 
    } ,
    urlImage:"https://image.tmdb.org/t/p/w220_and_h330_face",
    headerKey:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZThhM2Y0YmNiMTAyYTlmNWMzNDFjOTI2MzE4NDY4ZSIsInN1YiI6IjY1MTQyMWE1Y2FkYjZiMDJjMWQwMTZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ppSO9fAZwRBNBHCVa50JvbdWa9iUn1fSbm98knMcCeg"
};

export const ContextUrl=createContext();

const StoreUrl=(props)=> {
    const [urlState,setUrlState]=useState(urlInitial);

    return (
        <ContextUrl.Provider value={[urlState,setUrlState]}>{props.children}</ContextUrl.Provider>
    );
};

export default StoreUrl;