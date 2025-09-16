import React from "react";
import styles from "../styles/Mens.module.css";
import Card from "../Components/Card";
import { products } from "../Data/Products";

const Men = () => {
  return (
    <section className={styles.menSection}>
      {/* Title + Line */}
      <div className={styles.Text}>
        <h2>Mens Collection</h2>
        <div className={styles.decorLine}></div>
      </div>

      {/* Full Product Grid */}
      <Card products={products} />
    </section>
  );
};

export default Men;
