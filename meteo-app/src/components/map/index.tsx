// MoroccoMap.tsx
import React, { useState, useEffect } from "react";
import L, { LatLngTuple, Map } from "leaflet";
import axios from "axios";

interface WeatherData {
  weather: { description: string }[];
  main: { temp: number };
}

interface City {
  name: string;
  coords: LatLngTuple;
}

const MoroccoMap: React.FC = () => {
  const [map, setMap] = useState<Map | null>(null);
  const [weatherData, setWeatherData] = useState<{
    [city: string]: WeatherData;
  }>({});

  useEffect(() => {
    // Initialize map
    const mapInstance = L.map("morocco-map").setView([31.7917, -7.0926], 6);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      mapInstance
    );
    setMap(mapInstance);

    // Fetch weather data for each city
    const cities: City[] = [
      { name: "Rabat", coords: [34.020882, -6.84165] },
      { name: "Casablanca", coords: [33.5731, -7.5898] },
      // Add more cities as needed
    ];
    Promise.all(cities.map((city) => fetchWeather(city)))
      .then((data) => {
        const weatherInfo: { [city: string]: WeatherData } = {};
        data.forEach((weather, index) => {
          weatherInfo[cities[index].name] = weather;
        });
        setWeatherData(weatherInfo);
      })
      .catch((error) => console.error(error));
  }, []);

  const fetchWeather = async (city: City): Promise<WeatherData> => {
    const apiKey = "YOUR_API_KEY";
    const [latitude, longitude] = city.coords;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      return {
        weather: response.data.weather,
        main: response.data.main,
      };
    } catch (error) {
      console.error(error);
      return {} as WeatherData; // Return empty object as fallback
    }
  };

  // Render city markers and weather information
  useEffect(() => {
    if (map) {
      Object.entries(weatherData).forEach(([city, data]) => {
        const marker = L.marker(data.coord as LatLngTuple).addTo(map);
        marker
          .bindPopup(
            `<b>${city}</b><br>${data.weather[0].description}<br>Temperature: ${data.main.temp}°C`
          )
          .openPopup();
      });
    }
  }, [map, weatherData]);

  return <div id="morocco-map" style={{ height: "400px" }} />;
};

export default MoroccoMap;
