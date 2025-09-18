import React, { useState } from "react";
import styles from "../styles/Women.module.css";
import Card from "../Components/Card";
import { womenProducts } from "../Data/Products";

const Women = () => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...womenProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "az") return a.title.localeCompare(b.title);
    if (sortOption === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <section className={styles.womenSection}>
      <div className={styles.Text}>
        <h2>Womens Collection</h2>
        <div className={styles.decorLine}></div>
      </div>

      <div className={styles.sortBox}>
        <label>Sort by:</label>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="">Default</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="az">Name: A to Z</option>
          <option value="za">Name: Z to A</option>
        </select>
      </div>

      <Card products={sortedProducts} />
    </section>
  );
};

export default Women;
