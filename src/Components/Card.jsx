import React, { useState, useEffect } from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Card.module.css";

const Card = ({ products = [], limit }) => {
  const [selectedColors, setSelectedColors] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayCards = products;
  if (limit) {
    displayCards = isMobile ? products.slice(0, 3) : products.slice(0, limit);
  }

  const handleColorClick = (cardId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [cardId]: color,
    }));
  };

  return (
    <div data-aos="fade-up" className={styles.grid}>
      {displayCards.map((card) => {
        const selectedColor =
          selectedColors[card.id] || Object.keys(card.variants)[0];
        const currentImg = card.variants[selectedColor];

        return (
          <div
            key={card.id}
            className={styles.card}
            onClick={() => navigate(`/product/${card.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.cardImg}>
              <img src={currentImg} alt={card.title} />
              <button
                className={styles.addBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart({
                    id: card.id,
                    name: card.title,
                    price: card.price,
                    image: currentImg,
                  });
                }}
              >
                +
              </button>
            </div>
            <div className={styles.cardBody}>
              <h6>{card.title}</h6>
              <div className={styles.bottomRow}>
                <div className={styles.colors}>
                  {Object.keys(card.variants).map((c, i) => (
                    <span
                      key={i}
                      style={{
                        background: c,
                        border:
                          selectedColor === c
                            ? "2px solid black"
                            : "1px solid #ddd",
                      }}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleColorClick(card.id, c);
                      }}
                    ></span>
                  ))}
                </div>
                <p>${card.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
