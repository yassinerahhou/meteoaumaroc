import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Weather from "./components/weather/Weather";
import "./App.css";
import "./DarkMode.css"; // Imporrt DarkMode.css

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <>
      <Navbar />
      <button onClick={toggleDarkMode} className={darkMode ? "dark-mode" : ""}>
        Dark Mode
      </button>
      <Weather />
    </>
  );
}

export default App;



