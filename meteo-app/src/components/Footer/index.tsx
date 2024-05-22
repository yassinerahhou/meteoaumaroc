import "./footer_style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import logo from "./../../assets/logo-2.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="parent-div">
          <div className="logo">
            {/* Logo image */}
            <img src={logo} alt="Logo" className="logo-image" />

            {/* Social media icons */}
            <span id="social-media">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </span>
          </div>

          {/* Quick Links Section */}
          <div className="quick-links">
            <h3>MOST VIEWED CITIES</h3>
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
                <a href="#">FES</a>
              </li>
            </ul>
          </div>

          {/* Legal Pages Section */}
          <div className="legal-pages">
            <h3>Legal Pages</h3>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Popular Articles Section */}
          <div className="popular-articles">
            <h3>POPULAR ARTICLES</h3>
            <ul>
              <li>
                <a href="#">ATTENTION... ANOTHER TIME HAS BEEN ADDED</a>
              </li>
              <li>
                <a href="#">SPECIAL WARNING BULLETIN</a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Copyright */}
        <center>
          <p id="copyright">
            &copy; {new Date().getFullYear()} WEATHERINMOROCCO. All rights
            reserved.
          </p>
        </center>
      </footer>
    </>
  );
}
