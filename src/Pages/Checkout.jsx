import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Checkout.module.css";

const Checkout = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [orderPlaced, setOrderPlaced] = useState(false);

const handlePlaceOrder = () => {
  if (!form.email || !form.phone || !form.address) {
    alert("Please fill all required fields");
    return;
  }

  setOrderPlaced(true);

  setTimeout(() => {
    setOrderPlaced(false);
  }, 4000);
};


  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
    }
  }, [cartItems, navigate]);

  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subTotal * 0.1;
  const shipping = 0;
  const total = subTotal - discount + shipping;

  const [form, setForm] = useState({
    email: "",
    phone: "",
    address: "",
    cardName: "",
    expiry: "",
    cvv: "",
    postal: "",
    upiId: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.checkoutWrapper}>
      <div className={styles.checkoutContainer}>
        <div className={styles.left}>
          <div className={styles.section}>
            <h3>1. Account Details</h3>
            <div className={styles.grid2}>
              <div className={styles.inputGroup}>
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Mobile Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="(505) 299-8387"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>2. Delivery Address</h3>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={form.address}
              onChange={handleChange}
              className={styles.fullInput}
            />
          </div>
          <div className={styles.section}>
            <h3>3. Payment Details</h3>
            <div className={styles.paymentTabs}>
              <button
                className={`${styles.tabBtn} ${
                  paymentMethod === "card" ? styles.active : ""
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                Debit/Credit Card
              </button>
              <button
                className={`${styles.tabBtn} ${
                  paymentMethod === "upi" ? styles.active : ""
                }`}
                onClick={() => setPaymentMethod("upi")}
              >
                UPI
              </button>
            </div>

            {paymentMethod === "card" && (
              <div className={styles.grid4}>
                <div className={styles.inputGroup}>
                  <label>Name on card</label>
                  <input
                    type="text"
                    name="cardName"
                    value={form.cardName}
                    onChange={handleChange}
                    placeholder="Enter name"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={form.expiry}
                    onChange={(e) => {
                      let value = e.target.value.replace(/[^0-9/]/g, ""); 
                      if (value.length === 2 && !value.includes("/")) {
                        value = value + "/"; 
                      }
                      if (value.length <= 5) {
                        setForm({ ...form, expiry: value });
                      }
                    }}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Security Code</label>
                  <input
                    type="number"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    placeholder="000"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postal"
                    value={form.postal}
                    onChange={handleChange}
                    placeholder="UK"
                  />
                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className={styles.inputGroup}>
                <label>UPI ID</label>
                <input
                  type="text"
                  name="upiId"
                  value={form.upiId}
                  onChange={handleChange}
                  placeholder="example@upi"
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.orderSummary}>
            <h3>Order Summary</h3>

            {cartItems.map((item) => (
              <div key={item.id} className={styles.productRow}>
                <img src={item.image} alt={item.name} />
                <div className={styles.productInfo}>
                  <p className={styles.productName}>{item.name}</p>
                  <p className={styles.productDetails}>
                    ${item.price} × {item.quantity}
                  </p>
                  <div className={styles.cartActions}>
                    <button
                      className={styles.cartBtn}
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className={styles.cartBtn}
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className={styles.productPrice}>
                  ${item.price * item.quantity}
                </div>
              </div>
            ))}

            <div className={styles.priceRow}>
              <span>Sub Total</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className={styles.priceRow}>
              <span>Shipping</span>
              <span className={styles.freeText}>Free</span>
            </div>

            <div className={`${styles.priceRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className={styles.noteRow}>
              <p>
                Tax Included. <span className={styles.underline}>Shipping</span>{" "}
                Calculated At Checkout.
              </p>
              <p>Estimated Delivery By 25 April, 2022</p>
            </div>

            <button className={styles.placeOrderBtn} onClick={handlePlaceOrder}>
  Place Order
</button>
          </div>
        </div>
      </div>
      {orderPlaced && (
  <div className={styles.successAlert}>
     Order placed successfully! ✅ <br /> ( mile ga nhi bas kabhi )
  </div>
)}
    </div>
  );
};

export default Checkout;
