import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import Profile from "../pages/Profile";
import Users from "../pages/Users";
import SettingLayout from "../layouts/SettingLayout";
import ThemeSetting from "../pages/ThemeSetting";
import GlobalError from "../pages/GlobalError";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsPage from "../pages/ProductsPage";
import Calendar from "../pages/Calendar";

export const MainRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/calendar", element: <Calendar /> },
      {
        path: "/setting",
        element: <SettingLayout />,
        children: [{ path: "/setting/theme", element: <ThemeSetting /> }],
      },
      { path: "/profile", element: <Profile /> },
      { path: "/users", element: <Users /> },
    ],
    errorElement: <GlobalError />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
