import Header from "./components/Header";
import Footer from "./components/Footer";
import Weather from "./components/weather/Weather"; 
/*import Search from "./components/search-irea"; */


import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Weather /> {/* Add the Weather component */}
      {/*<Search />*/}
      <Footer />
    </>
  );
}

export default App;

