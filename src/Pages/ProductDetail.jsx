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
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const handleSizeGuideClick = () => {
    setShowSizeGuide(!showSizeGuide);
  };

  if (!product) {
    return (
      <div className={styles.notFoundContainer}>
        <div className={styles.notFoundContent}>
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productDetailContainer}>
      {/* Left: Product Image */}
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img 
            src={product.variants[selectedColor]} 
            alt={product.title}
            className={styles.productImage}
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>

      {/* Right: Product Info */}
      <div className={styles.productInfo}>
        <div className={styles.productHeader}>
          <h1 className={styles.productName}>{product.title}</h1>
          <div className={styles.productBadge}>New Arrival</div>
        </div>

        {/* Colors */}
        <div className={styles.optionGroup}>
          <div className={styles.optionHeader}>
            <h4>Color</h4>
            <span className={styles.selectedOption}>{selectedColor}</span>
          </div>
          <div className={styles.colorOptions}>
            {colors.map((color) => (
              <button
                key={color}
                className={`${styles.colorCircle} ${selectedColor === color ? styles.active : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
                aria-label={`Select ${color} color`}
              >
                {selectedColor === color && (
                  <div className={styles.colorCheck}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sizes and Price */}
        <div className={styles.optionGroup}>
          <div className={styles.sizePriceContainer}>
            <div className={styles.sizeSection}>
              <div className={styles.optionHeader}>
                <h4>Size</h4>
                <button 
                  className={styles.sizeGuide}
                  onClick={handleSizeGuideClick}
                >
                  Size Guide
                </button>
              </div>
              <div className={styles.sizeOptions}>
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.active : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {showSizeGuide && (
                <div className={styles.sizeGuideModal}>
                  <div className={styles.sizeGuideContent}>
                    <h5>Size Guide</h5>
                    <div className={styles.sizeChart}>
                      <div className={styles.sizeRow}>
                        <span>S</span><span>34-36"</span>
                      </div>
                      <div className={styles.sizeRow}>
                        <span>M</span><span>38-40"</span>
                      </div>
                      <div className={styles.sizeRow}>
                        <span>L</span><span>42-44"</span>
                      </div>
                      <div className={styles.sizeRow}>
                        <span>XL</span><span>46-48"</span>
                      </div>
                    </div>
                    <button 
                      className={styles.closeSizeGuide}
                      onClick={() => setShowSizeGuide(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.priceSection}>
              <div className={styles.priceContainer}>
                <span className={styles.priceLabel}>Price</span>
                <span className={styles.price}>${product.price}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add to Cart */}
        <div className={styles.actionSection}>
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
            <span className={styles.btnText}>Add to Cart</span>
            <div className={styles.btnIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M17 13H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>

        {/* Info Points */}
        <div className={styles.productDetails}>
          <h4>Product Details</h4>
          <div className={styles.infoGrid}>
            {info.map((point, idx) => (
              <div key={idx} className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;