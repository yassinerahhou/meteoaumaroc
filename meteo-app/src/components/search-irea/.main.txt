import "./style.css";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import OptionList from "./OptionList";

import SearchButton from "./SearchButton";

import { optionType } from "./.././../types/index";

const Search: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<optionType[]>([]);

  useEffect(() => {
    if (city) {
      setTerm(city.name);
      setOptions([]);
    }
  }, [city]);

  const getSearchoptions = (value: string) => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const getForecast = (city: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
    )
      .then((res) => res.json())
      .then((data) => console.log({ data }));
  };

  const onInputChange = (value: string) => {
    setTerm(value);
    getSearchoptions(value);
  };

  const onSubmit = () => {
    if (!city) return;
    getForecast(city);
  };

  return (
    <>
      <section className="search_1">
        <div className="">
          <h1 style={{ fontSize: "2.25rem", fontWeight: "300" }}>
            METEO <span>MAROCo</span>{" "}
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
            <SearchInput value={term} onChange={onInputChange} />
            <OptionList options={options} onOptionSelect={setCity} />
            <SearchButton onClick={onSubmit} />
          </div>
        </div>
        <br />
        <h1 id="recent_loca"> RECENT LOCATIONS </h1>
        <div className="last_locations"></div>
      </section>
    </>
  );
};

export default Search;
