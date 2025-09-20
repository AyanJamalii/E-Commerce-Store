import React, { useState } from "react";
import styles from "../styles/Junior.module.css";
import Card from "../Components/Card";
import { juniorProducts } from "../Data/Products";
import SortIcon from "@mui/icons-material/Sort"; // import icon

const Junior = () => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...juniorProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    if (sortOption === "az") return a.title.localeCompare(b.title);
    if (sortOption === "za") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <section className={styles.juniorSection}>
      <div className={styles.Text}>
        <h2>Juniors Collection</h2>
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

export default Junior;
