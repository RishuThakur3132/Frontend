import "../CSS/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-box">
          <h2>🚗 Car 24</h2>

          <p>
            Find your dream car with Car24.
            Explore quality cars at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/cart">Cart</a>
        </div>

        {/* Services */}
        <div className="footer-box">
          <h3>Services</h3>

          <p>🚗 Buy Cars</p>
          <p>💰 Best Prices</p>
          <p>⭐ Quality Cars</p>
          <p>🛡️ Trusted Service</p>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact Us</h3>

          <p>📞 +91 98765 43210</p>
          <p>📧 car24@gmail.com</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Car24. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;