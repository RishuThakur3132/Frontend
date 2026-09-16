import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../Context/carContext.jsx";
import Header from "../Components/Header.jsx";
import "../CSS/checkOut.css";

function Checkout() {
  const navigate = useNavigate();
  const { cart, dispatch } = useContext(cartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      navigate("/");
      return;
    }

    alert("Order placed successfully! 🚗🎉");

    dispatch({
      type: "CLEAR",
    });

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <>
        <Header />

        <div className="empty-checkout">
          <h2>🚗 No Car Selected</h2>
          <p>Please select a car before checkout.</p>

          <button onClick={() => navigate("/")}>
            Browse Cars
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="checkout-page">

        <div className="checkout-heading">
          <span>MY CAR24</span>
          <h1>Checkout</h1>
          <p>Complete your car purchase securely.</p>
        </div>

        <form
          className="checkout-container"
          onSubmit={handleSubmit}
        >

          {/* LEFT SIDE */}

          <div className="checkout-left">

            {/* Customer Information */}

            <div className="checkout-card">

              <h2>01. Customer Information</h2>

              <div className="form-grid">

                <div className="input-box">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

            </div>


            {/* Address */}

            <div className="checkout-card">

              <h2>02. Delivery Address</h2>

              <div className="input-box full">
                <label>Complete Address</label>

                <textarea
                  name="address"
                  placeholder="Enter your complete address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-grid">

                <div className="input-box">
                  <label>City</label>

                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <label>State</label>

                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-box">
                  <label>PIN Code</label>

                  <input
                    type="text"
                    name="pincode"
                    placeholder="PIN Code"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

            </div>


            {/* Payment */}

            <div className="checkout-card">

              <h2>03. Payment Method</h2>

              <div className="payment-list">

                <label className="payment-box">
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      formData.payment === "Cash on Delivery"
                    }
                    onChange={handleChange}
                  />

                  <div>
                    <strong>💵 Cash on Delivery</strong>
                    <p>Pay when your car is delivered.</p>
                  </div>
                </label>


                <label className="payment-box">
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    checked={formData.payment === "UPI"}
                    onChange={handleChange}
                  />

                  <div>
                    <strong>📱 UPI Payment</strong>
                    <p>Pay securely using UPI.</p>
                  </div>
                </label>


                <label className="payment-box">
                  <input
                    type="radio"
                    name="payment"
                    value="Card"
                    checked={formData.payment === "Card"}
                    onChange={handleChange}
                  />

                  <div>
                    <strong>💳 Credit / Debit Card</strong>
                    <p>Secure card payment.</p>
                  </div>
                </label>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="checkout-right">

            <div className="order-summary">

              <h2>Order Summary</h2>

              {cart.map((item) => (

                <div
                  className="checkout-car"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={`${item.brand} ${item.model}`}
                  />

                  <div>
                    <h3>
                      {item.brand} {item.model}
                    </h3>

                    <p>
                      {item.year} × {item.quantity || 1}
                    </p>

                    <strong>
                      ₹
                      {(
                        Number(item.price || 0) *
                        Number(item.quantity || 1)
                      ).toLocaleString("en-IN")}
                    </strong>
                  </div>

                </div>

              ))}


              <div className="summary-line">
                <span>Subtotal</span>
                <strong>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="summary-line">
                <span>Delivery</span>
                <strong className="free">
                  FREE
                </strong>
              </div>

              <div className="total-line">
                <span>Total Amount</span>

                <strong>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </strong>
              </div>


              <button
                type="submit"
                className="place-order-btn"
              >
                Confirm & Place Order →
              </button>


              <button
                type="button"
                className="back-cart-btn"
                onClick={() => navigate("/cart")}
              >
                ← Back to Cart
              </button>

              <p className="secure-text">
                🔒 Your information is secure
              </p>

            </div>

          </div>

        </form>

      </div>
    </>
  );
}

export default Checkout;