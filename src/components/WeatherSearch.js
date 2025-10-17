import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity, fetchWeather } from "../features/weather/WeatherSlice";

const WeatherSearch = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);
  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) dispatch(fetchWeather(city));
  };
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={city}
        placeholder="Enter city name..."
        onChange={(e) => dispatch(setCity(e.target.value))}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default WeatherSearch;
