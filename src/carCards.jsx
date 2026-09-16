import { useNavigate } from "react-router-dom";
import "./CSS/CarCards.css";
import { car } from "./cars.js";
import { useContext } from "react";
import { cartContext } from "./Context/carContext.jsx";
import { toast } from "react-toastify";

function CarCards() {
  const navigate = useNavigate();

  const { cart, dispatch } = useContext(cartContext);

  // Buy Now
  const buyNow = (item) => {
    const exists = cart.find(
      (car) => car.id === item.id
    );

    if (!exists) {
      dispatch({
        type: "ADD_TO_CART",
        product: item,
      });
    }

    toast.success(
      `${item.brand} ${item.model} selected 🚗`
    );

    navigate("/checkout");
  };

  return (
    <div className="cars-grid">

      {car.map((item) => (

        <div className="car-card" key={item.id}>

          {/* Image */}
          <div className="car-image-box">

            <img
              src={item.image}
              alt={`${item.brand} ${item.model}`}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/600x400?text=Car+Image";
              }}
            />

            {item.isFeatured && (
              <span className="featured">
                Featured
              </span>
            )}

          </div>

          {/* Content */}
          <div className="car-content">

            {/* Title */}
            <div className="car-title">

              <div>
                <h2>
                  {item.brand} {item.model}
                </h2>

                <p>{item.year}</p>
              </div>

              <span className="rating">
                ⭐ {item.rating}
              </span>

            </div>

            {/* Price */}
            <div className="price-action">

              <div className="price-container">

                <h3>
                  ₹{(Number(item.price) / 100000).toFixed(2)} Lakh
                </h3>

                <p>
                  Ex-Showroom Price
                </p>

              </div>

            </div>

            {/* Car Information */}
            <div className="car-info">

              <span>⛽ {item.fuelType}</span>

              <span>⚙️ {item.transmission}</span>

              <span>🛣️ {item.mileage} km</span>

              <span>👥 {item.seats} Seats</span>

            </div>

            {/* Location */}
            <p className="location">
              📍 {item.location}, {item.state}
            </p>

            {/* Buttons */}
            <div className="card-buttons">

              <button
                className="details-btn"
                onClick={() =>
                  navigate(`/details/${item.id}`)
                }
              >
                View Details
              </button>

              <button
                className="buy-btn"
                onClick={() => buyNow(item)}
              >
                🚗 Buy Now
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default CarCards;