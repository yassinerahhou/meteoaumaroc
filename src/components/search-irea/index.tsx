import React, { ChangeEvent, useEffect, useState, useRef } from "react";
import { optionType, weatherDataType } from "./../../types";
import "./Search.css";
import WeatherDisplay from "./WeatherDisplay";

type ForecastData = {
  list: Array<{
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
    };
    weather: Array<{
      icon: string;
    }>;
  }>;
};

type RecentCity = {
  city: optionType;
  weather: weatherDataType;
};

const Search: React.FC = (): JSX.Element => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<optionType[]>([]);
  const [weatherData, setWeatherData] = useState<weatherDataType | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [recentCities, setRecentCities] = useState<RecentCity[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const getSearchOptions = (value: string) => {
    if (value.trim() === "") {
      setOptions([]);
      setShowSuggestions(false);
      return;
    }

    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
    )
      .then((res) => res.json())
      .then((data: optionType[]) => {
        setOptions(data);
        setShowSuggestions(true);
      });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    setSearchTerm(value);
    getSearchOptions(value);
  };

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
    )
      .then((res) => res.json())
      .then((data: weatherDataType) => {
        setWeatherData(data);
        const updatedRecentCities = [
          { city, weather: data },
          ...recentCities
            .filter((rc) => rc.city.name !== city.name)
            .slice(0, 2),
        ];
        setRecentCities(updatedRecentCities);
        localStorage.setItem(
          "recentCities",
          JSON.stringify(updatedRecentCities)
        );

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=
          a66d11d3a668ad93f9cf6b25dc0ac419`
        )
          .then((res) => res.json())
          .then((forecast: ForecastData) => {
            setForecastData(forecast);
          });
      });
  };

  const onSubmit = () => {
    if (city) {
      getForecast(city);
    } else if (searchTerm.trim() !== "") {
      fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm.trim()}&limit=1&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
      )
        .then((res) => res.json())
        .then((data: optionType[]) => {
          if (data.length > 0) {
            const newCity = data[0];
            setCity(newCity);
            getForecast(newCity);
          } else {
            alert("City not found. Please try again.");
          }
        });
    }
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
      setShowSuggestions(false);
    }
  }, [city]);

  useEffect(() => {
    const storedRecentCities = localStorage.getItem("recentCities");
    if (storedRecentCities) {
      setRecentCities(JSON.parse(storedRecentCities));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="search-container">
      <section className="search-section">
        <h1 className="search-title">Weather Forecast</h1>
        <p className="search-description">
          Enter a place name to get the current weather and forecast
        </p>

        <div className="search-box">
          <input
            ref={inputRef}
            type="text"
            value={term}
            className="search-input"
            onChange={onInputChange}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Enter city name"
          />
          {showSuggestions && (
            <ul className="suggestion-list">
              {options.map((option) => (
                <li key={`${option.name}-${option.lat}-${option.lon}`}>
                  <button
                    className="suggestion-button"
                    onClick={() => {
                      setCity(option);
                      getForecast(option);
                      setShowSuggestions(false);
                    }}
                  >
                    {option.name}, {option.country}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button className="search-button" onClick={onSubmit}>
            Search
          </button>
        </div>
      </section>

      {weatherData && (
        <section className="current-weather">
          <h2 className="section-title">CURRENT WEATHER</h2>
          <WeatherDisplay weatherData={weatherData} />
        </section>
      )}

      <section className="recent-locations">
        <h2 className="section-title">RECENT LOCATIONS</h2>
        <div className="location-grid">
          {recentCities.map((recentCity, index) => (
            <div
              key={`${recentCity.city.name}-${index}`}
              className="location-card"
            >
              <h3 className="location-name">{recentCity.city.name}</h3>
              <div className="weather-info">
                <img
                  src={`http://openweathermap.org/img/wn/${recentCity.weather.weather[0].icon}.png`}
                  alt="weather-icon"
                  className="weather-icon"
                />
                <div className="temperature-info">
                  <span className="temperature">
                    {recentCity.weather.main.temp}°C
                  </span>
                  <span className="feels-like">
                    Feels like {recentCity.weather.main.feels_like}°C
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {forecastData && (
        <section className="forecast">
          <h2 className="section-title">5-DAY FORECAST</h2>
          <div className="date-selector">
            {Array.from(
              new Set(
                forecastData.list.map(
                  (forecast) => forecast.dt_txt.split(" ")[0]
                )
              )
            )
              .filter((date) => date !== new Date().toISOString().split("T")[0])
              .map((date) => (
                <button
                  key={date}
                  onClick={() => handleDateSelect(date)}
                  className={`date-button ${
                    selectedDate === date ? "selected" : ""
                  }`}
                >
                  {new Date(date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </button>
              ))}
          </div>
          <div className="forecast-list">
            {forecastData.list
              .filter(
                (forecast) => forecast.dt_txt.split(" ")[0] === selectedDate
              )
              .map((forecast, index) => (
                <div
                  key={`${forecast.dt_txt}-${index}`}
                  className="forecast-item"
                >
                  <span className="forecast-time">
                    {forecast.dt_txt.split(" ")[1].slice(0, 5)}
                  </span>
                  <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt="weather-icon"
                    className="forecast-icon"
                  />
                  <span className="forecast-temp">{forecast.main.temp}°C</span>
                  <span className="forecast-feels-like">
                    Feels like {forecast.main.feels_like}°C
                  </span>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Search;
