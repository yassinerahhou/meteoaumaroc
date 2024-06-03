import "./header_style.css";
import logo from "./../../assets/mini-logo.png";
// import {sky} from "./../../assets/sky-blue-1.jpg"
export default function Header() {
  return (
    <>
      <header className="main-header">
        <nav className="sub-nav">
          <div className="logo-div">
            {/* <h1>meteo maroc</h1> */}
            <img src={logo} alt="Logo" className="logo-image" />
          </div>

          <div className="elements-nav">
            <ul className="ul-nav">
              <li className="li-nav">AUJOURD'HUI</li>
              <li className="li-nav">DEMAIN</li>
              <li className="li-nav">WEEK-END</li>
            </ul>
          </div>
          {/* ACCESS DIV */}
          <div className="access-div">
            <p className="li-nav">burger icon</p>
          </div>
        </nav>
      </header>
    </>
  );
}
