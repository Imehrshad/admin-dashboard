import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { updateCSSVariables } from "../redux/features/theme/themeSlice";

const NotFoundPage = () => {
  const navigation = useNavigate();
  const themeState = useSelector((state) => state.theme);
  useEffect(() => {
    updateCSSVariables(themeState.colorScheme.colors);
    if (themeState.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeState.theme]);
  return (
    <div className="  h-screen w-screen dark:bg-darkPrimary bg-primary  flex justify-center items-center flex-col gap-10 ">
      <h1 className="font-vazir-black text-yellow-400 text-6xl">404</h1>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "صفحه پیدا نشد ",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "برای بازگشت روی لینک زیر کلیک کنید",
          2000,
        ]}
        wrapper="span"
        speed={20}
        repeat={Infinity}
        className="font-vazir-black text-yellow-400 md:text-5xl sm:text-3xl text-2xl"
        />

      <div>
        <button onClick={() => navigation(-1)} className="dark:text-white">
          بازگشت به صفحه قبلی
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
