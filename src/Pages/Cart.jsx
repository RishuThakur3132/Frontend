import { useContext } from "react";
import { cartContext } from "../Context/carContext";
import Header from "../Components/Header.jsx";
import { useNavigate } from "react-router-dom";
import "../CSS/Cart.css";

function Cart() {
  const navigate = useNavigate();

  const { cart, dispatch } = useContext(cartContext);

  // Increase quantity
  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE",
      id: id,
    });
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE",
      id: id,
    });
  };

  // Delete single car
  const removeItem = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  // // Clear complete cart
  // const clearCart = () => {
  //   dispatch({
  //     type: "CLEAR",
  //   });
  // };

  // Total price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * item.quantity,
    0
  );

  // Total cars
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <Header />

      <h1 className="cart-title">
        My Cart 🛒
      </h1>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>
            Cart is Empty 🛒
          </h2>

          <p>
            Add some cars to your cart to see them here.
          </p>

          <button
            className="shop-btn"
            onClick={() => navigate("/")}
          >
            Browse Cars
          </button>

        </div>

      ) : (

        <div className="cart-container">

          {/* CART ITEMS */}

          <div className="cart-items">

            {cart.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

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
                    ₹
                    {Number(item.price || 0).toLocaleString(
                      "en-IN"
                    )}
                  </p>


                  {/* Quantity */}

                  <div className="quantity-section">

                    <span>
                      Quantity:
                    </span>

                    <div className="quantity-controls">

                      {/* Decrease */}

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>


                      {/* Quantity */}

                      <span>
                        {item.quantity}
                      </span>


                      {/* Increase */}

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                  </div>


                  {/* Delete */}

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.id)
                    }
                  >
                    🗑 Remove
                  </button>

                </div>


                {/* Item Total */}

                <div className="item-total">

                  <p>
                    Total
                  </p>

                  <h3>
                    ₹
                    {(
                      Number(item.price || 0) *
                      item.quantity
                    ).toLocaleString("en-IN")}
                  </h3>

                </div>

              </div>

            ))}

          </div>


          {/* ORDER SUMMARY */}

          <div className="cart-summary">

            <h2>
              Order Summary
            </h2>


            <div className="summary-row">

              <span>
                Total Cars
              </span>

              <span>
                {totalItems}
              </span>

            </div>


            <div className="summary-row">

              <span>
                Subtotal
              </span>

              <span>
                ₹
                {totalPrice.toLocaleString("en-IN")}
              </span>

            </div>


            <div className="summary-row">

              <span>
                Delivery
              </span>

              <span>
                Free
              </span>

            </div>


            <hr />


            <div className="summary-total">

              <span>
                Total
              </span>

              <strong>
                ₹
                {totalPrice.toLocaleString("en-IN")}
              </strong>

            </div>


            {/* Checkout */}

            <button
              className="checkout-btn"
              onClick={() =>
                navigate("/checkout")
              }
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Cart;