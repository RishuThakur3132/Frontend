import "../CSS/About.css";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

function About() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* About Section */}
      <main className="about-page">

        <section className="about-hero">
          <h1>About Us</h1>
          <p>
            Welcome to CAR 24 — your trusted platform for finding
            the right car at the right price.
          </p>
        </section>

        <section className="about-content">

          <div className="about-text">
            <h2>Who We Are</h2>

            <p>
              CAR 24 is a modern car platform designed to make buying
              and exploring cars simple, fast and convenient.
            </p>

            <p>
              We provide users with a wide range of cars and useful
              information so they can make better decisions before
              purchasing a vehicle.
            </p>

            <p>
              Our goal is to provide a simple and reliable car-buying
              experience for everyone.
            </p>
          </div>

          <div className="about-card">
            <div className="car-icon">🚗</div>
            <h2>CAR 24</h2>
            <p>
              Making your car search easier and smarter.
            </p>
          </div>

        </section>

        {/* Why Choose Us */}
        <section className="why-us">
          <h2>Why Choose CAR 24?</h2>

          <div className="features">

            <div className="feature">
              <div className="feature-icon">🚘</div>
              <h3>Wide Range of Cars</h3>
              <p>
                Explore different cars according to your needs
                and budget.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>
                Find cars at competitive and affordable prices.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">🔒</div>
              <h3>Trusted Platform</h3>
              <p>
                We focus on providing a simple and reliable
                experience.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default About;