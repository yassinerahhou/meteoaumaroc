import Header from "./components/Header";
import Footer from "./components/Footer";
// immport Weather from "./components/weather/Weather";
import Search from "./components/search-irea/";
import Map from "./components/dynamic_map/map";
import "./App.css";
import Header_2 from "./components/Header-2";
import Footer_2 from "./components/FOOTER-2";
function App() {
  return (
    <>
      {" "}
      <Header_2 />
      {/* <Header /> */}
      {/* <Weather />  */}
      {/* <Search /> */}
      <div className="parrent_div">
        <Map />
      </div>
      <Footer_2 />
      {/* <Footer /> */}
    </>
  );
}

export default App;
