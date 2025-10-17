import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "../features/weather/WeatherSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
