import React from 'react'
import styles from "../styles/SpecialCollection.module.css";
import { useCart } from '../Context/CartContext';
import bagImg from '../Assests/Images/classicLeatherBag.jpg'
const SpecialCollection = () => {
  const { addToCart } = useCart(); 

  const specialProduct = {
    id: "special-1",
    name: "Classic Leather Backpack",
    price: 150,
    image: bagImg, 
  };

  return (
    <div className={styles.specialCollection}>
      <div className={styles.textSeciton} data-aos="fade-right">
        <h3>SUMMER SPECIAL COLLECTION</h3>
        <h2>{specialProduct.name}</h2>
        <p>
          Crafted with premium leather, spacious <br />
          design, and modern style — perfect for <br />
          work or travel.
        </p>
        <div className={styles.bottomRow}>
          <div className={styles.Color}></div>
          <span>${specialProduct.price}</span>
        </div>
        <div className={styles.addcartBtnSec}>
          <button
            className={styles.speacialBtn}
            onClick={() => addToCart(specialProduct)}
          >
            Add to cart
          </button>
        </div>
      </div>

      <div className={styles.SpecialImg} data-aos="fade-left">
        <img src={specialProduct.image} alt={specialProduct.name} className={styles.productImage}/>
      </div>
    </div>
  );
};

export default SpecialCollection;
