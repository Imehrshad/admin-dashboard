import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { updateCSSVariables } from "../redux/features/theme/themeSlice";
import { useSelector } from "react-redux";

const GlobalError = () => {
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
    <>
      <div className="  h-screen w-screen dark:bg-darkPrimary bg-primary  flex justify-center items-center flex-col md:gap-10 gap-5 ">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "خطایی رخ داده است!",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "برای بازگشت روی لینک زیر کلیک کنید",
            2000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="font-vazir-black text-red-600 md:text-5xl sm:text-3xl text-2xl"
        />
        <div>
          <NavLink to="/" className="dark:text-white">
            بازگشت به داشبورد
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default GlobalError;
