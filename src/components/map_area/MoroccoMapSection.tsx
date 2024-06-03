import React, { useEffect, useState } from "react";
import { weatherDataType } from "./../../types";
import "./MapSection.css";
import moroccomap from "./morocco-map.png";
import { getWeatherIcon } from "../search-irea/WeatherIcons";

const cities = [
  { name: "Casablanca", lat: 33.5731, lon: -7.5898 },
  { name: "Rabat", lat: 34.020882, lon: -6.84165 },
  { name: "Marrakesh", lat: 31.6295, lon: -7.9811 },
  { name: "Fes", lat: 34.0331, lon: -5.0003 },
  { name: "Tangier", lat: 35.7595, lon: -5.834 },
  { name: "Agadir", lat: 30.4278, lon: -9.5981 }, // Added Agadir
  { name: "Dakhla", lat: 23.6847, lon: -15.957 },
];

const Map: React.FC = () => {
  const [weatherData, setWeatherData] = useState<{
    [key: string]: weatherDataType | null;
  }>({});

  useEffect(() => {
    cities.forEach((city) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${
          city.lon
        }&units=metric&appid=${import.meta.env.VITE_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData((prevState) => ({ ...prevState, [city.name]: data }));
        });
    });
  }, []);

  return (
    <>
      <div className="map-container">
        <center>
          <h1 className="map-title">Weather in Morocco</h1>
        </center>
        <br />
        <img src={moroccomap} alt="Morocco Map" className="morocco-map" />
        {cities.map((city) => {
          const weatherIconClass = weatherData[city.name]
            ? getWeatherIcon(weatherData[city.name]!.weather[0].icon)
            : "";

          return (
            <div
              key={city.name}
              className={`city-label ${city.name.toLowerCase()}`}
            >
              <div className="city-name">
                {city.name}
                {weatherData[city.name] && (
                  <i className={`weather-icon ${weatherIconClass}`}></i>
                )}
              </div>
              <div className="city-weather">
                {weatherData[city.name]?.main.temp}°C
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Map;
