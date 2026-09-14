import { useNavigate } from "react-router-dom";
import "./CSS/CarCards.css";
import { car } from "./cars.js";

function CarCards() {
  const navigate = useNavigate();

  return (
    <>
      {car.map((car) => (
        <div className="car-card" key={car.id}>

          <div className="car-image-box">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="car-image"
            />
          </div>

          <div className="car-details">

            <div className="car-header">
              <h2>{car.brand}</h2>

              <span className="rating">
                ⭐ {car.rating}
              </span>
            </div>

            <h3>{car.model}</h3>

            <p className="year">
              {car.year}
            </p>

            <div className="car-info">
              <span>⛽ {car.fuelType}</span>
              <span>⚙️ {car.transmission}</span>
              <span>🚙 {car.bodyType}</span>
            </div>

            <p className="location">
              📍 {car.location}
            </p>

            <p className="engine">
              🔧 {car.engine}
            </p>

            <p className="power">
              ⚡ {car.horsepower} HP
            </p>

            <div className="price">
              ₹ {car.price}
            </div>

            <div className="car-buttons">
              <button onClick={() => navigate(`Details/${car.id}`)}
              className="buy-btn"> Buy Now</button>

            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default CarCards;