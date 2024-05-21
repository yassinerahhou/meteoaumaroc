import React from "react";
import { weatherDataType } from "./../../types";
import "./WeatherDisplay.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { getWeatherIcon } from "./WeatherIcons";
interface WeatherDisplayProps {
  weatherData: weatherDataType | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          backgroundColor: "#f9f9f9",
          fontSize: "24px",
          color: "#333",
        }}
      >
        Please enter your city name
      </div>
    );
  }
  // const weatherIconClass = getWeatherIcon("01d");
  const WeatherIcon = getWeatherIcon(weatherData.weather[0].icon);

  return (
    <div className="weather-display">
      <center>
        {" "}
        <h2>Weather in {weatherData.name}</h2>{" "}
      </center>
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
              <span id="wheather_icon">
                {" "}
                <i className={WeatherIcon}></i>
              </span>{" "}
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
