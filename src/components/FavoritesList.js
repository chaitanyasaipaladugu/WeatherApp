import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, fetchWeather } from "../features/weather/WeatherSlice";

const FavoritesList = () => {
  const favorites = useSelector((state) => state.weather.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>⭐ Favorite Cities</h3>
      <ul>
        {favorites.map((city) => (
          <li key={city}>
            {city}
            <button onClick={() => dispatch(fetchWeather(city))}>View</button>
            <button onClick={() => dispatch(removeFavorite(city))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
