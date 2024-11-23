import React from "react";
import { NavLink } from "react-router-dom";

const UserBox = () => {
  return (
    <NavLink
      className={({ isActive }) =>
        `py-2  px-3 rounded-md bottom-0  flex items-center gap-2 hover-items-sidebar cursor-pointer ${
          isActive
            ? ""
            : "hover-items-sidebar"
        }`
      }
      to="/profile"
    >
      <img
        src="../public/image/dummy-user.png"
        alt="ادمین"
        className="md:w-9 w-7 bg-zinc-200 rounded-full object-fill p-1"
      />
      <p className="whitespace-nowrap">اسم کاربر</p>
    </NavLink>
  );
};

export default UserBox;
