// import Header from "./components/Header";
// import Footer from "./components/Footer";
// // immport Weather from "./components/weather/Weather";
// import Search from "./components/search-irea/";
import Map from "./components/dynamic_map/map";
import "./App.css";
import Header_2 from "./components/Header-2";
import Footer_2 from "./components/FOOTER-2";
import Contact from "./components/CONTACT";
// import WeatherDisplay from "./components/search-irea/WeatherDisplay";
// import { weatherDataType } from "./components/search-irea/types";
// import WeatherDisplayProps from "./components/search-irea/WeatherDisplay";
// import "./assets/js/main.js";
function App() {
  return (
    <>
      {" "}
      <Header_2 />
      {/* <Header /> */}
      {/* <Weather />  */}
      {/* <Search /> */}
      <div className="parrent_div">
        {" "}
        <Map />{" "}
      </div>
      <Contact />
      <Footer_2 />
      {/* <Footer /> */}
    </>
  );
}

export default App;
