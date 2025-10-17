import React from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import FavoritesList from "./components/FavoritesList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>🌤️ Weather App</h1>
      <WeatherSearch />
      <WeatherDisplay />
      <FavoritesList />
    </div>
  );
}

export default App;
