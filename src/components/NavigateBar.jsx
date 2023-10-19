import React, { useState } from "react";
import DropDownList from "./DropDownList";
import ImageChangeTheme from "./ImageChangeTheme";
import { FilmIcon, Bars4Icon } from "@heroicons/react/24/solid";
import { Link  } from 'react-router-dom';
import {FilterUrl,Menu,CategoryType } from "./dataMenu";


function NavigateBar(props) {
const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <nav className="shadow-md w-full border border-slate-800 bg-slate-200 rounded-md dark:bg-slate-800 dark:border-slate-200">
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <FilmIcon className="w-7 h-7 text-slate-800 dark:text-emerald-400" />
          <Link to={"/"}>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              REEL TRACKER
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-800 dark:text-slate-200"
          >
            <Bars4Icon className="w-6 h-6" />
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:space-x-4  pr-9 md:pl-0`}
        >
          {Menu.map((menu) => (
            <li
              key={menu.menuId}
              className="md:flex my-7 pe-8 md:my-0 md:ml-0 text-slate-800 dark:text-slate-200 font-semibold items-center"
            >
              <DropDownList
                Menu={menu}
                options={
                  CategoryType.find(
                    (el) => el.categoryTypeId === menu.menuCategoryTypeId
                  ).categoryTypeObject
                }
                url={FilterUrl.find(
                  (el) => el.filterUrlId === menu.menuFilterUrlId
                )}
              />
            </li>
          ))}
          <li
              key={100}
              className="md:flex my-7 pe-8 md:my-0 md:ml-0 text-slate-800 dark:text-slate-200 font-semibold items-center"
            >
             <Link to={'/myFavorites'}>Favorites</Link> 
            </li>
        </ul>
        <div className="absolute top-4 right-4 md:relative md:top-auto md:right-auto">
          <ImageChangeTheme />
        </div>
      </div>
    </nav>
  );
}

export default NavigateBar;
