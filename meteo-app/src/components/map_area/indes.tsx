mport React from "react";
"./../../types";
import "./map_area.css";
const map_area: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return <div>No weather data available</div>;
  }
  // const weatherIconClass = getWeatherIcon("01d");

  return (
    <div className="weather-display">
      <center>
        {" "}
        <h2>Weather in {weatherData.name}</h2>{" "}
      </center>
 </div>
