import Header from "./components/Header";
import Footer from "./components/Footer";
// immport Weather from "./components/weather/Weather";
import Search from "./components/search-irea/";
import Map from "./components/dynamic_map/map";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      {/* <Weather />  */}
      <Search />

      <Map />

      <Footer />
    </>
  );
}

export default App;

