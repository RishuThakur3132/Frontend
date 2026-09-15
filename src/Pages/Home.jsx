import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import CarCards from "../carCards.jsx";
import "../CSS/Home.css";

function Home() {

  return (
    <div className="home-page">

      <Header />

      <section className="hero">

        <div className="hero-content">

          <p className="hero-small">
            PREMIUM CAR COLLECTION
          </p>

          <h1>
            Find Your
            <span> Dream Car</span>
          </h1>

          <p className="hero-description">
            Explore premium cars, powerful SUVs and luxury
            vehicles at amazing prices.
          </p>

          <div className="hero-buttons">

            <a href="#cars">
              Explore Cars 🚗
            </a>

          </div>

        </div>

      </section>

      <section className="cars-section" id="cars">

        <div className="section-heading">

          <p>OUR COLLECTION</p>

          <h2>
            Featured <span>Cars</span>
          </h2>

          <p>
            Choose from our premium collection of vehicles.
          </p>

        </div>

        <CarCards />

      </section>

      <Footer />

    </div>
  );
}

export default Home;