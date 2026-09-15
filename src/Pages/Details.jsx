import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { car } from "../cars.js";
import { cartContext } from "../Context/carContext.jsx";
import "../CSS/Details.css";
import { toast } from "react-toastify";

function Details() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { cart, dispatch } = useContext(cartContext);

  const selectedCar = car.find(
    (item) => item.id === Number(id)
  );

  if (!selectedCar) {
    return (
      <div className="not-found">
        <h1>Car Not Found</h1>

        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const addToCart = () => {

    const exists = cart.find(
      (item) => item.id === selectedCar.id
    );

    if (exists) {
      toast.info("Car already added to cart");
      return;
    }

    dispatch({
      type: "ADD_TO_CART",
      product: selectedCar
    });

    toast.success("Car added to cart 🛒");
  };

  return (
    <div className="details-page">

      <div className="details">

        <div className="details-image">

          <img
            src={selectedCar.image}
            alt={selectedCar.model}
          />

          {selectedCar.isFeatured && (
            <span className="details-featured">
              Featured Car
            </span>
          )}

        </div>

        <div className="details-content">

          <p className="details-brand">
            {selectedCar.brand}
          </p>

          <h1>
            {selectedCar.model}
          </h1>

          <p className="details-year">
            {selectedCar.year}
          </p>

          <div className="details-rating">
            ⭐ {selectedCar.rating} / 5
          </div>

          <h2 className="details-price">
            ₹ {selectedCar.price}
          </h2>

          <div className="specifications">

            <div>
              <strong>Fuel</strong>
              <span>{selectedCar.fuelType}</span>
            </div>

            <div>
              <strong>Transmission</strong>
              <span>{selectedCar.transmission}</span>
            </div>

            <div>
              <strong>Engine</strong>
              <span>{selectedCar.engine}</span>
            </div>

            <div>
              <strong>Horsepower</strong>
              <span>{selectedCar.horsepower} HP</span>
            </div>

            <div>
              <strong>Mileage</strong>
              <span>{selectedCar.mileage} KM</span>
            </div>

            <div>
              <strong>Body</strong>
              <span>{selectedCar.bodyType}</span>
            </div>

            <div>
              <strong>Seats</strong>
              <span>{selectedCar.seats}</span>
            </div>

            <div>
              <strong>Color</strong>
              <span>{selectedCar.color}</span>
            </div>

          </div>

          <p className="details-location">
            📍 {selectedCar.location}, {selectedCar.state},{" "}
            {selectedCar.country}
          </p>

          <div className="details-buttons">

            <button
              className="buy-btn"
              onClick={() => navigate("/cart")}
            >
              Buy Now
            </button>

            <button
              className="add-btn"
              onClick={addToCart}
            >
              🛒 Add To Cart
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Details;