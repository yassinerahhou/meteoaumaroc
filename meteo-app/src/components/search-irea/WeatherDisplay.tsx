import React from "react";
import { weatherDataType } from "./../../types";
import "./WeatherDisplay.css";

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
      <br />
      <h1>TEST TO STYLE</h1>
      <h2>Weather in {weatherData.name}</h2>
      <div className="Current_wheather_p1">
        {/* data info = atkon fih 2 span dyal currentweather o current date  */}
        <div className="data_info">
          <span id="text_p1">CURRENT WHEATHER</span>
          <span id="text_time">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
        {/* had div hwa li ayji lwst atkun fih data  */}
        <div className="api_data">
          <span id="current_data_left">
            <p id="temp_id">
              {" "}
              <span id="tempereteur">{weatherData.main.temp}°</span>C
            </p>
          </span>
          <span id="current_data_right">
            <p>
              RealFeel Shade™ <span> {weatherData.main.feels_like}°C</span>
            </p>
            <hr />
            <p>
              Wind <span>{weatherData.wind.speed} m/s</span>
            </p>
            <hr />
            <p>
              Wind Gusts <span> {weatherData.visibility / 1000} km/h </span>
            </p>
            <hr />
            <p>
              {" "}
              Air Quality<span> {weatherData.weather[0].description}</span>
            </p>
            <hr />
            <p>
              Humidity <span>{weatherData.main.humidity}% </span>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
