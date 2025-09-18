import { useParams } from "react-router-dom";
import { useState } from "react";
import { menProducts, womenProducts, juniorProducts } from "../Data/Products"; 
import { useCart } from "../Context/CartContext";
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();

  // merge all categories into one array
  const allProducts = [...menProducts, ...womenProducts, ...juniorProducts];

  const product = allProducts.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(
    Object.keys(product.variants)[0]
  );
  const [selectedSize, setSelectedSize] = useState("M");

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.variants[selectedColor],
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <div className={styles.detailPage}>
      <div className={styles.left}>
        <img src={product.variants[selectedColor]} alt={product.title} />
      </div>

      <div className={styles.right}>
        <h1>{product.title}</h1>
        <p className={styles.price}>${product.price}</p>

        <div className={styles.colors}>
          <label>Colors:</label>
          {Object.keys(product.variants).map((c, i) => (
            <span
              key={i}
              className={`${styles.color} ${
                selectedColor === c ? styles.active : ""
              }`}
              style={{ background: c }}
              onClick={() => setSelectedColor(c)}
            ></span>
          ))}
        </div>

        <div className={styles.sizes}>
          <label>Size:</label>
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              className={`${styles.sizeBtn} ${
                selectedSize === size ? styles.active : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <button className={styles.addBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
