import React, { useState, useEffect } from "react";
import "./Weather.css";

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    setSearchHistory(savedHistory);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51c2c10072ca598f5968bc63bde11ec4&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      setSearchHistory((prevHistory) => {
        const newHistory = [city, ...prevHistory.slice(0, 4)];
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
        return newHistory;
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const clearHistory = () => {
    localStorage.removeItem("searchHistory");
    setSearchHistory([]);
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleSubmit}>
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
      <div className="history-container">
        <h2>Search History</h2>
        <ul>
          {searchHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={clearHistory}>Clear History</button>
      </div>
    </div>
  );
};

export default Weather;







  






