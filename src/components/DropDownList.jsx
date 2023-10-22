import { useEffect, useState, useContext } from "react";
import { ContextUrl } from "./StoreUrl";
import { Link } from "react-router-dom";

function DropDownList(props) {
  const [isActive, setIsActive] = useState(false);
  const [isHoverDDL, setIsHoverDDL] = useState(false);
  const [urlContext, setUrlContext] = useContext(ContextUrl);

  const menu = props.Menu;
  const options = props.options;
  const urlLink = props.url;

  useEffect(() => {
    setIsActive(false);
  }, [isHoverDDL]);

  const handlerIsActive = () => {
    setIsActive(!isActive);
  };
  const handlerIsHoverDDL = () => {
    setIsHoverDDL(!isHoverDDL);
  };

  const handleUrlLink = (categoryGenderIdApi, urlLink, menu) => {
      const urlChange = {
        url: urlLink.filterUrlLink,
        name: urlLink.filterUrlName,
        categoryTypeName: menu.menuCategoryTypeName,
        categoryGenderId: categoryGenderIdApi,
        params: {
          include_adult: urlLink.filterUrlParams.include_adult,
          include_video: urlLink.filterUrlParams.include_video,
          language: urlLink.filterUrlParams.language,
          page: urlLink.filterUrlParams.page,
          sort_by: urlLink.filterUrlParams.sort_by,
          whit_genres: categoryGenderIdApi,
        },
        urlImage: urlLink.filterUrlImage,
        headerKey: urlLink.filterURLHeaderKey,
      };
      
      const obligator="include_adult="+urlChange.params.include_adult+"&include_video="+urlChange.params.include_video+"&language="+urlChange.params.language+"&page="+urlChange.params.page+"&sort_by="+urlChange.params.sort_by+"&with_genres="
     
      urlChange.urlFetch=urlChange.url+urlChange.categoryTypeName+"?"+obligator+urlChange.categoryGenderId;

      setIsHoverDDL(!isHoverDDL);
      setUrlContext(urlChange);
  };

  return (
    <>
      <button onClick={() => handlerIsActive()}>{menu.menuName}</button>

      {isActive && (
        <div
          onMouseLeave={() => handlerIsHoverDDL()}
          id={menu.menuId}
          className="fixed top-11 cursor-pointer absolute z-10 bg-white rounded-lg shadow dark:bg-gray-700 "
        >
          <ul
            className="overflow-y-auto text-gray-700 dark:text-gray-200 "
            aria-labelledby="dropdownUsersButton"
          >
            {options.map((option) => (
              <li
                key={option.categoryGenderId}
                className="md:flex text-slate-800 dark:text-slate-200 font-semibold items-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <Link
                  to={`/category/${menu.menuCategoryTypeName}/${option.categoryGenderName}`}
                  onClick={() =>
                    handleUrlLink(option.categoryGenderIdApi, urlLink, menu)
                  }
                >
                  {option.categoryGenderName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default DropDownList;
