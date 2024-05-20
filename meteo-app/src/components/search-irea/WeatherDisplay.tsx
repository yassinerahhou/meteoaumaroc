import React from "react";
import { weatherDataType } from "./../../types";
import "./WeatherDisplay.css"

interface WeatherDisplayProps {
  weatherData: weatherDataType | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <div className="weather-display">
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;