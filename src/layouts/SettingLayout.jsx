import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const SettingLayout = () => {
  return (
    <div className="md:w-[90%] w-full py-6 px-10 flex justify-center items-center gap-2 bg-primary dark:bg-darkPrimary rounded-lg  dark:text-white flex-col">
      <h1 className="text-2xl font-vazir-bold p-2">تنظیمات</h1>
      <hr className="md:w-2/3 dark:opacity-15 opacity-60 w-full" />
      <ul className="p-2 flex gap-10">
        <li>
          <NavLink
            to="/setting/theme"
            className={({ isActive }) =>
              `text-xl w-full  hover:text-custom ${
                isActive ? "text-custom" : "text-zinc-400"
              }`
            }
          >
            نمایه
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/setting/profile"
            className={({ isActive }) =>
              `text-xl w-full  hover:text-custom ${
                isActive ? "text-custom" : "text-zinc-400"
              }`
            }
          >
            پروفایل 
          </NavLink>
        </li>

      </ul>
      <div className=" flex justify-center items-center bg-secondary dark:bg-darkSecondary rounded-lg md:w-2/3 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingLayout;
