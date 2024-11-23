import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import MobileSideBar from "../components/MobileSideBar";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  return (
    <div className="h-screen flex justify-start items-start dark:bg-darkPrimary dark:text-white bg-primary shadow-[2px_2px_20px_rgba(1_1_1_0.15)]  overflow-hidden">
      <MobileSideBar toggleDrawer={toggleDrawer} isOpen={isOpen} />
      <Sidebar />
      <div className="md:grow w-full h-full bg-secondary">
        <div className="h-full ">
          <Header toggleDrawer={toggleDrawer} />
          <div className="flex justify-center items-start p-3  bg-secondary text-black dark:bg-darkSecondary overflow-y-auto h-full" >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
