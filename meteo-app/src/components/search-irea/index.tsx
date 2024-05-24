import { ChangeEvent, useEffect, useState } from "react";
import { optionType, weatherDataType } from "./../../types";
import "./style.css";
import WeatherDisplay from "./WeatherDisplay";

export default function Search(): JSX.Element {
  const [term, setTerm] = useState<string>("");
  const [city, setCity] = useState<optionType | null>(null);
  const [options, setOptions] = useState<optionType[]>([]);
  const [weatherData, setWeatherData] = useState<weatherDataType | null>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [recentCities, setRecentCities] = useState<
    { city: optionType; weather: weatherDataType }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState<string>("");

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
      .then((data) => {
        setWeatherData(data);
        // Save recent cities to localStorage
        const updatedRecentCities = [...recentCities, { city, weather: data }];
        setRecentCities(updatedRecentCities);
        localStorage.setItem(
          "recentCities",
          JSON.stringify(updatedRecentCities)
        );
        // Fetch forecast data
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=a66d11d3a668ad93f9cf6b25dc0ac419`
        )
          .then((res) => res.json())
          .then((forecast) => {
            setForecastData(forecast);
          });
      });
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

  // Load recent cities from localStorage on component mount
  useEffect(() => {
    const storedRecentCities = localStorage.getItem("recentCities");
    if (storedRecentCities) {
      setRecentCities(JSON.parse(storedRecentCities));
    }
  }, []);

  // Function to handle date selection
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <>
      <section className="search_1">
        <div className="">
          {/* <h1 style={{ fontSize: "2.25rem", fontWeight: "300" }}>
            METEO <span>MAROC</span>{" "}
          </h1> */}
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
        <div className="last_locations">
          {recentCities.slice(-3).map((recentCity, index) => (
            <div key={index} className="city_cube">
              <p>
                {recentCity.city.name}: {recentCity.weather.main.temp}°C Feels
                like: {recentCity.weather.main.feels_like}°C
              </p>
            </div>
          ))}
        </div>
        <br />
      </section>
      <div>
        <WeatherDisplay weatherData={weatherData} />
        {forecastData && (
          <div className="forecast-section">
            <h2>3-hour Forecast for the Next 5 Days</h2>
            <div className="forecast-dates">
              {(
                Array.from(
                  new Set(
                    forecastData.list.map(
                      (forecast: any) => forecast.dt_txt.split(" ")[0]
                    )
                  )
                ).filter(
                  (date) => date !== new Date().toISOString().split("T")[0]
                ) as string[]
              ).map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateSelect(date)}
                  className={selectedDate === date ? "selected" : ""}
                >
                  {date}
                </button>
              ))}
            </div>
            <div className="forecast-scroll-container">
              {forecastData.list
                .filter(
                  (forecast: any) =>
                    forecast.dt_txt.split(" ")[0] === selectedDate
                )
                .map((forecast: any, index: number) => (
                  <div key={index} className="forecast-card">
                    <span>
                      {forecast.dt_txt.split(" ")[1]}: {forecast.main.temp}°C
                    </span>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
