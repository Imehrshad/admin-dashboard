import { Drawer, List, ListItem } from "@mui/material";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { sidebarItems } from "../globalData";
import { GoSignOut } from "react-icons/go";
import { useSelector } from "react-redux";
import UserBox from "./UserBox";

const MobileSideBar = ({ isOpen, toggleDrawer }) => {
  const themeState = useSelector((state) => state.theme);
console.log(Object.keys(themeState.colorScheme.colors)[0])
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: 300,
          borderRadius: "3rem 0 0 3rem",
          padding: "0.7rem",
          backgroundColor: themeState.theme === "dark" ? "#262626" :Object.values(themeState.colorScheme.colors)[0],
        },
      }}
    >
      <div className="h-full bg-primary dark:bg-zinc-800 text-black dark:text-white">
        <List className="flex flex-col gap-2">
          <ListItem onClick={toggleDrawer(false)} className="p-0">
            <div className="w-full">
              <UserBox />
            </div>
          </ListItem>

          {sidebarItems.map((item, index) => (
            <ListItem key={index} onClick={toggleDrawer(false)} className="p-0">
              <NavLink
                to={`/${item.path}`}
                className={({ isActive }) =>
                  `flex items-center gap-2 p-3 w-full rounded-xl transition-colors duration-200 ${
                    isActive ? "active-items-sidebar" : "hover-items-sidebar "
                  }`
                }
              >
                <item.icon size={20} className="text-current" />
                <p>{item.name}</p>
              </NavLink>
            </ListItem>
          ))}

          {/* Divider */}
          <hr className="w-4/5 mx-auto border-gray-300 dark:border-gray-600" />

          {/* Settings Item */}
          <ListItem onClick={toggleDrawer(false)} className="p-0">
            <NavLink
              to="/setting"
              className={({ isActive }) =>
                `flex items-center gap-2 p-3 w-full rounded-xl ${
                  isActive ? "active-items-sidebar" : "hover-items-sidebar "
                }`
              }
            >
              <IoSettingsOutline size={20} className="text-current" />
              <p>تنظیمات</p>
            </NavLink>
          </ListItem>

          {/* Logout Item */}
          <ListItem className="p-0">
            <div
              className="flex items-center gap-2 p-3 w-full rounded-xl text-start hover:shadow hover-items-sidebar "
              onClick={() => {
                toggleDrawer(false);
                // Handle logout action here
              }}
            >
              <GoSignOut size={20} className="text-current" />
              <p className="grow text-start">خروج</p>
            </div>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default MobileSideBar;
