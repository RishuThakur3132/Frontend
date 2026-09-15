import { useContext } from "react";
import { cartContext } from "../Context/carContext";
import Header from "../Components/Header.jsx";
import { useNavigate } from "react-router-dom";
import "../CSS/Cart.css";

function Cart() {
    const navigate = useNavigate();
  const { cart, dispatch } = useContext(cartContext);

  // Increase quantity
  const increaseQuantity = (id, quantity) => {
    dispatch({
      type: "UPDATE_CART",
      id: id,
      quantity: quantity + 1,
    });
  };

  // Decrease quantity
  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      dispatch({
        type: "UPDATE_CART",
        id: id,
        quantity: quantity - 1,
      });
    }
  };

  // Remove item
  const removeItem = (id) => {
    dispatch({
      type: "DELETE_CART",
      id: id,
    });
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  // Calculate total items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <Header />

      <h1 className="cart-title">My Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Cart is Empty 🛒</h2>
          <p>Add some cars to your cart to see them here.</p>
        </div>
      ) : (
        <div className="cart-container">

          {/* Cart Items */}
          <div className="cart-items">

            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* Image */}
                <div className="cart-image">
                  <img
                    src={item.image}
                    alt={`${item.brand} ${item.model}`}
                  />
                </div>

                {/* Details */}
                <div className="cart-details">

                  <h2>
                    {item.brand} {item.model}
                  </h2>

                  <p className="car-year">
                    Year: {item.year}
                  </p>

                  <p className="car-price">
                    ₹{Number(item.price).toLocaleString("en-IN")}
                  </p>

                  {/* Quantity */}
                  <div className="quantity-section">

                    <span>Quantity:</span>

                    <div className="quantity-controls">

                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id,
                            item.quantity
                          )
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id,
                            item.quantity
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>

                  {/* Remove */}
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>

                </div>

                {/* Item Total */}
                <div className="item-total">

                  <p>Total</p>

                  <h3>
                    ₹
                    {(
                      Number(item.price) * item.quantity
                    ).toLocaleString("en-IN")}
                  </h3>

                </div>

              </div>
            ))}

          </div>

          {/* Cart Summary */}
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Cars</span>
              <span>{totalItems}</span>
            </div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                ₹{totalPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>
                ₹{totalPrice.toLocaleString("en-IN")}
              </strong>
            </div>

            <button className="checkout-btn"
             onClick={()=> navigate("/Checkout")}>
             Proceed to Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;