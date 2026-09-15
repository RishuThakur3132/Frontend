import { useNavigate } from "react-router-dom";
import "./CSS/CarCards.css";
import { car } from "./cars.js";
import { useContext } from "react";
import { cartContext } from "./Context/carContext.jsx";
import { toast } from "react-toastify";

function CarCards() {

  const navigate = useNavigate();

  const { cart, dispatch } = useContext(cartContext);

  const addToCart = (item) => {

    const exists = cart.find(
      (car) => car.id === item.id
    );

    if (exists) {
      toast.info("Car already added to cart 🚗");
      return;
    }

    dispatch({
      type: "ADD_TO_CART",
      product: item
    });

    toast.success(`${item.brand} ${item.model} added to cart 🛒`);
  };

  return (
    <div className="cars-grid">

      {car.map((item) => (

        <div className="car-card" key={item.id}>

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

          <div className="car-content">

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

            <h3 className="price">
              ₹ {item.price}
            </h3>

            <div className="car-info">

              <span>⛽ {item.fuelType}</span>

              <span>⚙️ {item.transmission}</span>

              <span>🛣️ {item.mileage} km</span>

              <span>👥 {item.seats} Seats</span>

            </div>

            <p className="location">
              📍 {item.location}, {item.state}
            </p>

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
                className="cart-btn"
                onClick={() => addToCart(item)}
              >
                🛒 Add Cart
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default CarCards;