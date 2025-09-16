import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { useCart } from "../Context/CartContext";
import CartSidebar from "./CartSidebar";
import styles from "../styles/Navbar.module.css";

// ✅ Import Material Icons
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const count = (cartItems || []).reduce((sum, item) => sum + item.quantity, 0);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div data-aos="fade-down" className={styles.navbar}>
        {/* Hamburger Menu Button (Mobile Only) */}
        <button 
          className={styles.hamburgerBtn} 
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon className={styles.hamburgerIcon} />
        </button>

        <div className={styles.leftGroup}>
          <div className={styles.logo}>
            <Link to="/">XYZ</Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.menu}>
          <li><Link to="/men">Men</Link></li>
          <li><Link to="/women">Women</Link></li>
          <li><Link to="/junior">Junior</Link></li>
        </ul>

        <button className={styles.cartBtn} onClick={() => setIsCartOpen(true)}>
          <ShoppingBagIcon className={styles.cartIcon} />
          {count > 0 && <span className={styles.cartCount}>{count}</span>}
        </button>

        <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>

      {/* Mobile Menu Sidebar */}
      <div className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.active : ''}`}>
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <h3>Menu</h3>
            <button className={styles.closeBtn} onClick={closeMobileMenu}>
              <CloseIcon />
            </button>
          </div>
          
          <nav className={styles.mobileMenuNav}>
            <Link to="/men" onClick={closeMobileMenu}>Men</Link>
            <Link to="/women" onClick={closeMobileMenu}>Women</Link>
            <Link to="/junior" onClick={closeMobileMenu}>Junior</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;