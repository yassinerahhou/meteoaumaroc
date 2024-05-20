// src/components/Search.tsx
import React, { ChangeEvent, useEffect, useState } from "react";
import { optionType,  weatherDataType } from "./../../types/index";
import "./style.css";
import WeatherDisplay from "./WeatherDisplay";

export default function Search(): JSX.Element {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<optionType[]>([]);
  const [weatherData, setWeatherData] = useState<weatherDataType | null>(null);

  const getSearchoptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);
    getSearchoptions(value);
  };

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  const onOptionSelect = (option: optionType) => {
    setCity(option);
  };

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  return (
    <>
      <section className="search_1">
        <div className="">
          <h1 style={{ fontSize: "2.25rem", fontWeight: "300" }}>
            METEO <span>MAROC</span>{" "}
          </h1>
          <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
            Enter below a place you want to know the weather of and select an
            option from the dropdown
          </p>

          <div
            style={{
              position: "relative",
              display: "flex",
              marginTop: "2.5rem",
            }}
          >
            <input
              type="text"
              value={term}
              className="myInput"
              onChange={onInputChange}
            />
            <ul className="list-map-sugg-1">
              {options.map((option, index) => (
                <li key={option.name + "-" + index}>
                  <button
                    className="custom-button"
                    onClick={() => onOptionSelect(option)}
                  >
                    {option.name}, {option.country}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
              onClick={onSubmit}
            >
              Search
            </button>
          </div>
        </div>
        <br />
        <h1 id="recent_loca"> RECENT LOCATIONS </h1>
        <div className="last_locations"></div>
        <WeatherDisplay weatherData={weatherData} />
      </section>
    </>
  );
}
