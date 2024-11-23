import { combineReducers, configureStore } from "@reduxjs/toolkit";
import DarkThemeSlice from "./features/theme/themeSlice";
import calendarSlice from "./features/calendar/calenderSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const configuration = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  theme: DarkThemeSlice,
  calendar: calendarSlice,
});
const persistedReducer = persistReducer(configuration, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
