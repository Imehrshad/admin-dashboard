import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  colorScheme: {
    isDefault: true,
    colors: {
      "--color-primary": "#ffffff",
      "--color-secondary": "#f9fafb",
      "--color-border": "#5d5fef",
      "--color-font": "#333f44",
      "--color-button": "#5d5fef",
    },
  },
};

const themeSlice = createSlice({
  name: "theme slice",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setColorScheme(state, action) {
      state.colorScheme.isDefault = false;
      state.colorScheme.colors = action.payload;
      updateCSSVariables(action.payload);
    },
    setThemeToDefault(state) {
      state.theme = "light";
      state.colorScheme.isDefault = true;
      state.colorScheme.colors = {
        "--color-primary": "#ffffff",
        "--color-secondary": "#f9fafb",
        "--color-border": "#5d5fef",
        "--color-button": "#5d5fef",
      };
      updateCSSVariables(state.colorScheme.colors);
    },
  },
});
export const updateCSSVariables = (colorScheme) => {
  Object.entries(colorScheme).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
};

export const { setTheme, setColorScheme, setThemeToDefault } =
  themeSlice.actions;
export default themeSlice.reducer;
