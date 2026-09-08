import CarCards from "../carCards.jsx"
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
function Home() {
    return(
        <div className="home-page">
      <Header />
      <section className="hero">
        <div className="hero-text">
          <h1>
            Find Your <span>Dream Car</span>
          </h1>

          <p>
            Explore the best cars with amazing prices and features.
            Choose your perfect car today.
          </p>

        </div>

        <div className="hero-image">
          <img
            src="https://i.pinimg.com/736x/bf/33/c1/bf33c19b443f7a54488d30c96c9a609e.jpg"
            alt="Luxury Car"
          />
        </div>
      </section>
      <section className="cars-section">
        <h2>Popular Cars</h2>

        <div className="car-container">
          <CarCards />
        </div>
      </section>
      <Footer />

    </div> 
    )
}
export default Home;