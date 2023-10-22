import React, { useState } from "react";
import {DropDownList} from "./DropDownList";
import ImageChangeTheme from "./ImageChangeTheme";
import {
  FilmIcon,
  Bars4Icon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { FilterUrl, Menu, CategoryType } from "./dataMenu";

function NavigateBar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState(""); 

 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="shadow-md w-full border border-slate-800 bg-slate-200 rounded-md dark:bg-slate-800 dark:border-slate-200">
      <div className="md:pl-10 md:pr-0 md:flex md:justify-stretch lg:justify-between items-center">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <FilmIcon
            className="w-7 h-7 text-slate-800 dark:text-emerald-400"
            title="Home"
          />
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
          } md:flex md:space-x-4 md:pl-0`}
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
            <Link to={"/myFavorites"}>Favorites</Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-40 p-2 text-stone-200 bg-slate-800 dark:text-stone-900 dark:bg-slate-200 border border-slate-400 dark:border-slate-600 rounded-l-lg transition-all duration-300"
            />
            <button
              className="bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 p-2 rounded-r-lg hover:bg-slate-300 hover:dark:bg-slate-700 transition-all duration-300"
            >
              <Link to={`/result/${searchQuery}`}>
                <MagnifyingGlassCircleIcon
                  className="w-12 h-8"
                  title="Search"
                />
              </Link>
            </button>
          </form>

          <ImageChangeTheme />
        </div>
      </div>
    </nav>
  );
}

export default NavigateBar;
