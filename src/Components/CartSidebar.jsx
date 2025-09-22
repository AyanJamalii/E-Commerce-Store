import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";  // ✅ import navigation
import styles from "../styles/CartSidebar.module.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();
  const navigate = useNavigate(); // ✅ hook

  if (!isOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    onClose();            // close sidebar
    navigate("/checkout"); // go to checkout page
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.show : ""}`}
        onClick={onClose}
      />
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          <h2>Shopping Cart</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.items}>
          {cartItems.length === 0 ? (
            <p className={styles.empty}>Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className={styles.item}>
                <div>
                  <img src={item.image} alt="item-image" className={styles.itemImg} />
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className={styles.quantity}>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <div className={styles.itemRight}>
                  <span>${item.price * item.quantity}</span>
                  <button
                    className={styles.remove}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.total}>
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button className={styles.checkoutBtn} onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
