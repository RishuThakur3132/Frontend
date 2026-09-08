import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Cart.css";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  // Remove Car
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);

    localStorage.removeItem("cart");
  };

  // Add to Cart
  const addToCart = (item) => {
    const alreadyAdded = cart.some(
      (cartItem) => cartItem.id === item.id
    );

    if (alreadyAdded) {
      alert(
        `${item.brand} ${item.model} is already in your cart 🛒`
      );
      return;
    }

    const updatedCart = [...cart, item];

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    alert(
      `${item.brand} ${item.model} Added to Cart 🛒`
    );
  };

  return (
    <div className="cart-page">

      {/* Top Section */}

      <div className="cart-top">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h1>🛒 My Cart</h1>

        {cart.length > 0 && (
          <button
            className="clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>
        )}

      </div>

      {/* Empty Cart */}

      {cart.length === 0 ? (

        <div className="empty-cart">

          <div className="empty-icon">
            🛒
          </div>

          <h2>Your Cart is Empty</h2>

          <p>
            Add your favourite cars to your cart.
          </p>

          <button
            className="shop-btn"
            onClick={() => navigate("/cars")}
          >
            Browse Cars
          </button>

        </div>

      ) : (

        /* Cart Cars */

        <div className="cart-container">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              {/* Car Image */}

              <div className="cart-image-box">

                <img
                  src={item.image}
                  alt={`${item.brand} ${item.model}`}
                />

              </div>

              {/* Car Details */}

              <div className="cart-info">

                <div className="cart-title">

                  <h2>
                    {item.brand} {item.model}
                  </h2>

                  <span className="rating">
                    ⭐ {item.rating}
                  </span>

                </div>

                <p className="year">
                  {item.year}
                </p>

                <div className="car-info">

                  <span>
                    ⛽ {item.fuelType}
                  </span>

                  <span>
                    ⚙️ {item.transmission}
                  </span>

                  <span>
                    🚙 {item.bodyType}
                  </span>

                </div>

                <p>
                  📍 {item.location}
                </p>

                <p>
                  🔧 {item.engine}
                </p>

                <p>
                  ⚡ {item.horsepower} HP
                </p>

                <h3 className="price">
                  ₹ {item.price}
                </h3>

                {/* Buttons */}

                <div className="cart-actions">

                  {/* Buy Now */}

                  <button
                    className="buy-btn"
                    onClick={() =>
                      navigate(`/buy/${item.id}`)
                    }
                  >
                    Buy Now
                  </button>

                  {/* Remove */}

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Cart;