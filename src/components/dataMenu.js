export const CategoryGender = [
  {
    categoryGenderId: 1,
    categoryGenderName: "Action",
    categoryGenderIdApi: "28",
  },
  {
    categoryGenderId: 2,
    categoryGenderName: "Adventure",
    categoryGenderIdApi: "12",
  },
  {
    categoryGenderId: 3,
    categoryGenderName: "Comedy",
    categoryGenderIdApi: "35",
  },
  {
    categoryGenderId: 4,
    categoryGenderName: "Documentary",
    categoryGenderIdApi: "99",
  },
  {
    categoryGenderId: 5,
    categoryGenderName: "Drama",
    categoryGenderIdApi: "18",
  },
  {
    categoryGenderId: 6,
    categoryGenderName: "Horror",
    categoryGenderIdApi: "27",
  },
  {
    categoryGenderId: 7,
    categoryGenderName: "Romance",
    categoryGenderIdApi: "10749",
  },
  {
    categoryGenderId: 8,
    categoryGenderName: "War",
    categoryGenderIdApi: "10752",
  },
];

export const CategoryStreaming = [
  {
    id: 1,
    name: "Netflix",
    url: "",
    headerKey: "",
  },
  { id: 2, name: "HBO MAX", url: "" },
  { id: 3, name: "Star+", url: "" },
  { id: 4, name: "Disney+", url: "" },
  { id: 5, name: "Prime Video", url: "" },
];


export const CategoryType = [
  {
    categoryTypeId: 1,
    categoryTypeName: "CategoryGender",
    categoryTypeObject: CategoryGender,
  },
  {
    categoryTypeId: 2,
    categoryTypeName: "CategoryStreaming",
    categoryTypeObject: CategoryStreaming,
  }
];

export const FilterUrl = [
  {
    filterUrlId: 1,
    filterUrlName: "generic url",
    filterUrlLink: "https://api.themoviedb.org/3/discover/",
    filterUrlCategoryTypeName: "",
    filterUrlCategoryGenderId: "",
    filterUrlParams: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      whit_genres: "",
    },
    filterUrlImage: "https://image.tmdb.org/t/p/w220_and_h330_face",
    filterURLHeaderKey:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZThhM2Y0YmNiMTAyYTlmNWMzNDFjOTI2MzE4NDY4ZSIsInN1YiI6IjY1MTQyMWE1Y2FkYjZiMDJjMWQwMTZkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ppSO9fAZwRBNBHCVa50JvbdWa9iUn1fSbm98knMcCeg",
  },
  {
    filterUrlId: 2,
    filterUrlLink: "",
    filterUrlName: "series url",
    filterUrlCategoryTypeName: "",
    filterUrlCategoryGenderId: "",
    filterUrlParams: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      whit_genres: "",
    },
    filterUrlImage: "https://image.tmdb.org/t/p/w220_and_h330_face",
    filterUrlHeaderKey: "Bearer ",
  },
  {
    filterUrlId: 3,
    filterUrlLink: "",
    filterUrlName: "streaming url",
    filterUrlCategoryTypeName: "",
    filterUrlCategoryGenderId: "",
    filterUrlParams: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      whit_genres: "",
    },
    filterUrlImage: "https://image.tmdb.org/t/p/w220_and_h330_face",
    filterUrlHeaderKey: "Bearer ",
  },
];

export const Menu = [
  {
    menuId: 1,
    menuName: "Movies",
    menuCategoryTypeName: "movie",
    menuCategoryTypeId: 1,
    menuFilterUrlId: 1,
  },
  {
    menuId: 2,
    menuName: "Series",
    menuCategoryTypeName: "serie",
    menuCategoryTypeId: 1,
    menuFilterUrlId: 2,
  },
  {
    menuId: 3,
    menuName: "TV",
    menuCategoryTypeName: "tv",
    menuCategoryTypeId: 1,
    menuFilterUrlId: 1,
  },
 
//   {
//     menuId: 4,
//     menuName: "Streaming",
//     menuCategoryTypeName: "streaming",
    // menuCategoryTypeId: 2,
//     menuFilterUrlId: 3,
//   },
];
