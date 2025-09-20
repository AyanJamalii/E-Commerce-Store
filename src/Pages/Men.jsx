import React, { useState } from "react";
import styles from "../styles/Mens.module.css";
import Card from "../Components/Card";
import { menProducts } from "../Data/Products";
import SortIcon from "@mui/icons-material/Sort"; // Import the sort icon

const Men = () => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...menProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "az") return a.title.localeCompare(b.title);
    if (sortOption === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <section className={styles.menSection}>
      <div className={styles.Text}>
        <h2>Mens Collection</h2>
        <div className={styles.decorLine}></div>
      </div>

      <div className={styles.sortBox}>
        <SortIcon className={styles.sortIcon} />
        <select
          value={sortOption}
          onChange={handleSortChange}
          className={styles.sortSelect}
        >
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

export default Men;
