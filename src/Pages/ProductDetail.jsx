import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { menProducts, womenProducts, juniorProducts } from "../Data/Products"; 
import styles from "../styles/ProductDetail.module.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // merge all products
  const allProducts = [...menProducts, ...womenProducts, ...juniorProducts];
  const product = allProducts.find((p) => p.id.toString() === id);

  // fallback product values
  const colors = product ? Object.keys(product.variants || {}) : [];
  const sizes = ["S", "M", "L", "XL"];
  const info = product?.info || [
    "Wash in cold water only",
    "Model height: 6ft wearing size M",
    "Do not tumble dry",
  ];

  // ✅ hooks at the top (safe defaults even if product = undefined)
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  if (!product) {
    return <p className={styles.notFound}>Product not found.</p>;
  }

  return (
    <div className={styles.productDetailContainer}>
      {/* Left: Product Image */}
      <div className={styles.left}>
        <img src={product.variants[selectedColor]} alt={product.title} />
      </div>

      {/* Right: Product Info */}
      <div className={styles.right}>
        <h2 className={styles.productName}>{product.title}</h2>

        {/* Colors */}
        <div className={styles.optionGroup}>
          <h4>Colors:</h4>
          <div className={styles.colors}>
            {colors.map((color) => (
              <button
                key={color}
                className={`${styles.colorCircle} ${
                  selectedColor === color ? styles.active : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Sizes */}
      <div className={styles.optionGroup}>
  <div className={styles.sizePriceRow}>
    <div className={styles.sizes}>
      {sizes.map((size) => (
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
    <p className={styles.price}>${product.price}</p>
  </div>
</div>

        {/* Add to Cart */}
        <button
          className={styles.addToCartBtn}
          onClick={() =>
            addToCart({
              ...product,
              color: selectedColor,
              size: selectedSize,
              image: product.variants[selectedColor],
            })
          }
        >
          Add to Cart
        </button>

        {/* Info Points */}
        <div className={styles.infoPoints}>
          {info.map((point, idx) => (
            <p key={idx}>• {point}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
