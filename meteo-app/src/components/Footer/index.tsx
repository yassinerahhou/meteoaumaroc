import "./footer_style.css";
import "@fortawesome/fontawesome-free/css/all.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="parrent-div">
          <div className="logo">
            <h1>METEO MAROC</h1>
            <span id="social-media">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in "></i>
            </span>
          </div>
          <div className="quick_links">
            <h3>MOST VIEWD CITY</h3>
            <ul>
              <li>
                <a href="#">AGADIR</a>
              </li>
              <li>
                <a href="#">CASABLANCA</a>
              </li>
              <li>
                <a href="#">RABAT</a>
              </li>
              <li>
                <a href="#">TANGER</a>
              </li>
            </ul>
          </div>
          <div className="LEGAL-PAGES">
            <h3>Legal Pages</h3>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <center>
          {" "}
          <p id="copyright">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </center>
      </footer>
    </>
  );
}
