import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../features/weather/WeatherSlice";
const WeatherDisplay = () => {
  const { weather, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error:{error}</p>;
  if (!weather) return null;
  return (
    <div>
      <h2>{weather.name}</h2>
      <p>🌡️ Temp: {weather.main.temp}°C</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>🌬️ Wind: {weather.wind.speed} m/s</p>
      <button onClick={() => dispatch(addFavorite(weather.name))}>
        💗 Add to Favorites
      </button>
    </div>
  );
};
export default WeatherDisplay;
