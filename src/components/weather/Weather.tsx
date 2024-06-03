{ /*import React, { useState } from "react";
import "./Weather.css"

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51c2c10072ca598f5968bc63bde11ec4&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="weather-container"> {/* Add className="weather-container" here */}
      {/*<form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Feels like: {weatherData.main.feels_like}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Visibility: {weatherData.visibility / 1000} km</p>
        </div>
      )}
    </div>
  );
};

export default Weather;*/}
import React, { useState } from "react";
import "./Weather.css";

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51c2c10072ca598f5968bc63bde11ec4&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleCityChange = async (inputCity: string) => {
    setCity(inputCity);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${inputCity}&appid=51c2c10072ca598f5968bc63bde11ec4&units=metric`
      );
      const data = await response.json();
      const suggestions = data.list.map((item: any) => `${item.name}, ${item.sys.country}`);
      setCitySuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const [selectedCity] = suggestion.split(", ");
    setCity(selectedCity);
    setCitySuggestions([]);
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => handleCityChange(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {citySuggestions.length > 0 && (
        <ul className="suggestions">
          {citySuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {weatherData && (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Feels like: {weatherData.main.feels_like}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p>Visibility: {weatherData.visibility / 1000} km</p>
        </div>
      )}
    </div>
  );
};

export default Weather;





  






