import React from "react";
import { IoLogoXbox } from "react-icons/io";
import { sidebarItems } from "../globalData";
import { NavLink } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="h-full lg:basis-[15%] md:basis-[25%]  py-5 px-4 md:flex hidden ">
      <div className="p-2 flex flex-col  flex-1 gap-6 h-full  relative ">
        <NavLink className="flex gap-2  p-2 items-center " to="/">
          <IoLogoXbox size={40} />
          اسم برند
        </NavLink>
        <ul className="flex flex-col gap-6  ">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/${item.path}`}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-3 w-full rounded-xl transition-colors duration-200   ${
                    isActive
                      ? "active-items-sidebar "
                      : " hover-items-sidebar"
                  }`
                }
              >
                <item.icon size={20} />
                <p>{item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/setting"
          className={({ isActive }) =>
            `flex items-center gap-2 p-3 w-full rounded-xl  ${
              isActive ? "  active-items-sidebar  " : " hover-items-sidebar"
            }`
          }
        >
          <IoSettingsOutline size={20} />
          <p>تنظیمات</p>
        </NavLink>
        <div className="flex items-center gap-2 p-3 w-full rounded-xl text-start hover:shadow  hover-items-sidebar cursor-pointer ">
          <GoSignOut size={20} />
          <p className="grow text-start">خروج</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
