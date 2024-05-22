//import Header from "./components/Header";
// import Footer from "./components/Footer";
// immport Weather from "./components/weather/Weather";
import Search from "./components/search-irea/";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "./DarkMode.css"; // Import DarkMode.css

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <>
      {/*<Header /> */}
      {/* <Weather />  */}
      <Navbar />
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}

      </div>
      <Search />


      {/* <Footer /> */}
    </>
  );
}

export default App;
