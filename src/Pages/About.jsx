import "../CSS/About.css";
import Header from "../Components/Header.jsx";

function About() {
  return (
    <div className="about-page">
      <Header />

      <div className="about-container">

        <h1>About AutoDrive 🚗</h1>

        <p>
          Welcome to AutoDrive! We are a simple and trusted car
          platform where you can explore different cars and find
          your dream car.
        </p>

        <p>
          Our goal is to provide you with good quality cars,
          reasonable prices and an easy car shopping experience.
        </p>

        <div className="about-box">

          <div>
            <h2>100+</h2>
            <p>Cars</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Customers</p>
          </div>

          <div>
            <h2>10+</h2>
            <p>Brands</p>
          </div>

        </div>

        <h2>Why Choose AutoDrive?</h2>

        <ul>
          <li>🚗 Wide range of cars</li>
          <li>💰 Affordable prices</li>
          <li>⭐ Quality vehicles</li>
          <li>🛡️ Trusted service</li>
        </ul>

      </div>
    </div>
  );
}

export default About;