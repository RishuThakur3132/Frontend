import { useNavigate } from "react-router-dom";
import { car as Car } from "./cars";
import "./CSS/CarCards.css";

function CarCards() {
  const navigate = useNavigate();

  const addToCart = (item) => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const alreadyAdded = cart.some(
      (cartItem) => cartItem.id === item.id
    );

    if (alreadyAdded) {
      alert("Car already added to Cart 🛒");
      return;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, item])
    );

    alert(`${item.brand} ${item.model} Added to Cart 🛒`);
  };

  const buyNow = (item) => {
    navigate(`/buy/${item.id}`);
  };

  return (
    <>
      {Car.map((item) => (
        <div className="car-card" key={item.id}>

          <div className="car-image-box">
            <img
              src={item.image}
              alt={`${item.brand} ${item.model}`}
              className="car-image"
            />
          </div>

          <div className="car-details">

            <div className="car-header">
              <h2>{item.brand}</h2>

              <span className="rating">
                ⭐ {item.rating}
              </span>
            </div>

            <h3>{item.model}</h3>

            <p className="year">
              {item.year}
            </p>

            <div className="car-info">
              <span>⛽ {item.fuelType}</span>
              <span>⚙️ {item.transmission}</span>
              <span>🚙 {item.bodyType}</span>
            </div>

            <p className="location">
              📍 {item.location}
            </p>

            <p className="engine">
              🔧 {item.engine}
            </p>

            <p className="power">
              ⚡ {item.horsepower} HP
            </p>

            <div className="price">
              ₹ {item.price}
            </div>

            <div className="car-buttons">

              <button
                className="buy-btn"
                onClick={() => buyNow(item)}
              >
                Buy Now
              </button>

              <button
                className="cart-btn"
                onClick={() => addToCart(item)}
              >
                🛒 Add to Cart
              </button>

            </div>

          </div>
        </div>
      ))}
    </>
  );
}

export default CarCards;