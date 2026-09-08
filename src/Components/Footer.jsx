import { Link } from "react-router-dom";
import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Footer Top */}
      <div className="footer-container">

        {/* About */}
        <div className="footer-column">
          <div className="footer-logo">
             <span>CAR 24</span>
          </div>

          <p>
            Find your dream car with Car24.
            We provide quality cars at the best prices.
          </p>

          <div className="social-icons">
            <span>f</span>
            <span>𝕏</span>
            <span>◎</span>
            <span>▶</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Services</h3>

          <Link to="/cars">Buy a Car</Link>
          <Link to="/cars">Sell a Car</Link>
          <Link to="/cars">Car Finance</Link>
          <Link to="/cars">Test Drive</Link>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📍 Mohali, Punjab, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ support@car24.com</p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Car24. All Rights Reserved.
        </p>

        <div>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>

      </div>

    </footer>
  );
}

export default Footer;