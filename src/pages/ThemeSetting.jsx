import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
  setColorScheme,
  setThemeToDefault,
} from "../redux/features/theme/themeSlice";

const ThemeSetting = () => {
  const dispatch = useDispatch();
  const buttonColorRef = useRef();
  const bgColorRef = useRef();
  const bgsecondaryColorRef = useRef();
  const borderColorRef = useRef();

  const handleColorChange = () => {
    dispatch(setColorScheme({
      "--color-primary": bgColorRef.current.value,
      "--color-secondary": bgsecondaryColorRef.current.value,
      "--color-border": borderColorRef.current.value,
      "--color-button": buttonColorRef.current.value,
    }));
  };

  const resetTheme = () => {
    dispatch(setThemeToDefault());
  };
  return (
    <div className="p-4 dark:text-white flex w-full flex-col">
      <div className="flex gap-5 justify-center items-center flex-col">
        <div className="bg-amber-400/10 p-4 rounded-lg border-l-2 border-r-2 border-amber-400">
          <p>
            توجه : رنگ پس زمینه و رنگ پس زمینه دوم فقط در مود لایت بکار گرفته
            خواهند شد
          </p>
        </div>
        <div className="flex justify-between w-full px-10">
          <label className="mr-2">رنگ دکمه ها:</label>
          <input type="color" className="bg-transparent" ref={buttonColorRef} />
        </div>
        <div className="flex justify-between w-full px-10">
          <label className="mr-2">رنگ پس زمینه:</label>
          <input type="color" className="bg-transparent" ref={bgColorRef} />
        </div>
        <div className="flex justify-between w-full px-10">
          <label className="mr-2">رنگ پس زمینه دوم:</label>
          <input
            type="color"
            className="bg-transparent"
            ref={bgsecondaryColorRef}
          />
        </div>
        <div className="flex justify-between w-full px-10">
          <label className="mr-2">رنگ کادر ها:</label>
          <input type="color" className="bg-transparent" ref={borderColorRef} />
        </div>
        <div className="flex gap-2">
          {" "}
          <button
            className="btn-primary text-white px-10 py-2 rounded-lg text-center hover:scale-90 duration-200 transition-transform"
            onClick={handleColorChange}
          >
            ثبت{" "}
          </button>
          <button
            className="bg-gray-400 text-white px-10 py-2 rounded-lg text-center hover:scale-90 duration-200 transition-transform"
            onClick={resetTheme}
          >
            تنظمیات اولیه
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeSetting;
