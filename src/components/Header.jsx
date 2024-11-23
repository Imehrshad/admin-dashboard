import React, { useEffect, useState } from "react";
import UserBox from "./UserBox";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoMoon } from "react-icons/go";
import { IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, updateCSSVariables } from "../redux/features/theme/themeSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleDrawer }) => {
  const navigation=useNavigate()
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    const newTheme = themeState.theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
    console.log(`new theme : ${newTheme}`);
  };

  useEffect(() => {
    updateCSSVariables(themeState.colorScheme.colors)
    if (themeState.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeState.theme]);

  return (
    <div className="h-[9%]  dark:bg-darkPrimary dark:text-white bg-primary flex justify-center items-center px-3">
      <div className=" h-full flex lg:gap-20 sm:gap-5 items-center md:justify-center justify-between md:w-[95%] gap-2 w-full">
        <div
          className="p-3 hover-items-sidebar rounded-md md:hidden block ml-1"
          onClick={toggleDrawer(true)}
        >
          <RxHamburgerMenu size={20} />
        </div>
        <h1 className="font-vazir-bold py-2 text-4xl md:block hidden ">
          داشبورد
        </h1>
        <div className="bg-secondary dark:bg-darkSecondary py-2 rounded-2xl flex focus-within:border-custom focus-within:border-2 focus-within:border-opacity-50 md:w-2/4 grow-[2] md:grow-0 pr-3">
          <IoIosSearch size={25} className="text-custom cursor-pointer" onClick={()=>navigation("/we're working on this")} />
          <input
            type="text"
            className="focus:outline-none bg-transparent grow px-4 "
            placeholder="جستجو کنید ..."
          />
        </div>
        {themeState.theme === "dark" ? (
          <div
            className="bg-sky-200 p-2 rounded-full cursor-pointer hover:shadow-[0_0_15px] transition-shadow duration-300 hover:shadow-sky-400/40"
            onClick={toggleThemeHandler}
          >
            <GoMoon color="#0369a1" size={20} />
          </div>
        ) : (
          <div
            className="bg-amber-100 p-2 rounded-full cursor-pointer hover:shadow-[0_0_15px] transition-shadow duration-300 hover:shadow-amber-400/40"
            onClick={toggleThemeHandler}
          >
            <IoSunnyOutline color="#f59e0b" size={20} />
          </div>
        )}

        <div className="hidden md:block">
          <UserBox />
        </div>
      </div>
    </div>
  );
};

export default Header;
