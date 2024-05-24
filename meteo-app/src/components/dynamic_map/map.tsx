// src/components/Map.tsx

// Import necessary libraries and CSS for Leaflet
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

// Define the structure of a city with its name and coordinates (latitude and longitude)
interface City {
  name: string;
  lat: number;
  lon: number;
}

// List of cities in Morocco with their coordinates
const cities: City[] = [
  { name: "Casablanca", lat: 33.5731, lon: -7.5898 },
  { name: "Rabat", lat: 34.0209, lon: -6.8417 },
  { name: "Marrakech", lat: 31.6295, lon: -7.9811 },
  //   { name: "Fes", lat: 34.0331, lon: -5.0003 },
  { name: "Agadir", lat: 30.4278, lon: -9.5981 },
  { name: "Dakhla", lat: 23.6847, lon: -15.957 },
  { name: "Sefrou", lat: 33.8314, lon: -4.8289 },
  { name: "Oujda", lat: 34.6814, lon: -1.9076 },
  { name: "Cairo", lat: 30.033333, lon: 31.233334 },
  { name: "Lagos", lat: 6.524379, lon: 3.379206 },
  { name: "Nairobi", lat: -1.286389, lon: 36.817223 },
  { name: "Pretoria", lat: -25.747868, lon: 28.229271 },
  { name: "Dakar", lat: 14.692778, lon: -17.446667 },
  { name: "Accra", lat: 5.603717, lon: -0.186964 },
  { name: "Addis Ababa", lat: 9.145, lon: 40.489673 },
];

// Define the structure of the weather data we will fetch from the API
interface WeatherData {
  main: {
    temp: number; // Temperature
  };
  weather: [
    {
      description: string; // Weather condition description
    }
  ];
}

const Map: React.FC = () => {
  // State to hold weather data for each city
  const [weatherData, setWeatherData] = useState<
    Record<string, WeatherData | null>
  >({});
  // State to handle loading state for each city
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  // Function to fetch weather data for a given city
  const fetchWeather = async (city: string) => {
    setLoading((prev) => ({ ...prev, [city]: true })); // Set loading state for the city
    try {
      // Fetch weather data from OpenWeatherMap API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a66d11d3a668ad93f9cf6b25dc0ac419&units=metric`
      );
      const data = await response.json();
      // Store the fetched weather data in state
      setWeatherData((prev) => ({ ...prev, [city]: data }));
    } catch (error) {
      console.error("Failed to fetch weather data", error);
      // In case of error, store null for the city
      setWeatherData((prev) => ({ ...prev, [city]: null }));
    } finally {
      setLoading((prev) => ({ ...prev, [city]: false })); // Remove loading state
    }
  };

  // Function to handle mouseover event on a city marker
  const handleMouseOver = (city: string) => {
    if (!weatherData[city]) {
      fetchWeather(city); // Fetch weather data if not already fetched
    }
  };

  return (
    // Initialize the map with center coordinates and zoom level
    <>
      <MapContainer
        center={[31.7917, -7.0926]}
        zoom={4}
        className="dnyamic_map"
      >
        {/* Add a tile layer to the map from OpenStreetMap */}
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* Iterate over the list of cities and create a marker for each */}
        {cities.map((city) => (
          <Marker
            key={city.name}
            position={[city.lat, city.lon]}
            eventHandlers={{
              mouseover: () => handleMouseOver(city.name), // Handle mouseover event
            }}
          >
            {/* Popup to display weather information */}
            <Popup>
              <div>
                <h3>{city.name}</h3>
                {loading[city.name] ? (
                  <p>Loading...</p> // Show loading message
                ) : weatherData[city.name] ? (
                  <div>
                    <p>Temperature: {weatherData[city.name]?.main.temp} °C</p>
                    <p>
                      Condition:{" "}
                      {weatherData[city.name]?.weather[0].description}
                    </p>
                  </div>
                ) : (
                  <p>No data</p> // Show no data message
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Map;
