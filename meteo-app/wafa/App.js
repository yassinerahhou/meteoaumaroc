import { useState, useEffect } from 'react';

function App() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=your_api_key');
    const data = await res.json();
    setWeather(data);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <CurrentWeather weather={weather} />
        <ForecastForecast weather={weather} />  
      </main>
      <Footer />
    </div>
  );

}

function Header() {
  return <h1>Météo</h1>
}

function Footer() {
  return <p>&copy; 2023</p>
}

// Components to display current weather and forecast
function CurrentWeather() {...}  
function Forecast() {...}

export default App;
