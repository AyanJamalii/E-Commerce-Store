import React, { useState } from "react";
import { useCart } from "../Context/CartContext";   
import styles from "../styles/Card.module.css";

import img1 from "../Assests/Images/F0174125001_2_.jpeg";
import img2 from "../Assests/Images/F1466106001_2_37091f27-9494-4fe9-8a09-f937a9e5cd0c.jpeg";
import img3 from "../Assests/Images/F1472106801_3.jpg";
import img4 from "../Assests/Images/F1476106802_3.jpeg";
import img5 from "../Assests/Images/product.jpeg";
import img6 from "../Assests/Images/F1498106618_2_8d00d9de-7e11-42bb.jpg";
import img7 from "../Assests/Images/F1498106704_2_66e92d66-816a-47c7.jpg";
import img8 from "../Assests/Images/F1498106704_2_66e92d66-816a-47c7.jpg";

const Card = () => {
  const [selectedColors, setSelectedColors] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { addToCart } = useCart();   

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    { id: 1, title: "Mens T-shirt", price: 29, variants: { "#5c5143": img1, "#d94f38": img2, "#f0c933": img3 } },
    { id: 2, title: "Mens T-shirt", price: 29, variants: { "#243c7b": img2, "#fff": img3 } },
    { id: 3, title: "Mens T-shirt", price: 29, variants: { "#243c7b": img3, "#f0c933": img4 } },
    { id: 4, title: "Mens T-shirt", price: 29, variants: { "#5c5143": img4, "#d94f38": img5 } },
    { id: 5, title: "Mens T-shirt", price: 29, variants: { "#f0c933": img5, "#fff": img6 } },
    { id: 6, title: "Mens T-shirt", price: 29, variants: { "#243c7b": img6, "#d94f38": img7 } },
    { id: 7, title: "Mens T-shirt", price: 29, variants: { "#fff": img7, "#f0c933": img8 } },
    { id: 8, title: "Mens T-shirt", price: 29, variants: { "#5c5143": img8, "#d94f38": img1 } },
  ];

  const displayCards = isMobile ? cards.slice(0, 3) : cards;

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
          <div key={card.id} className={styles.card}>
            <div className={styles.cardImg}>
              <img src={currentImg} alt={card.title} />
              <button
                className={styles.addBtn}
                onClick={() =>
                  addToCart({
                    id: card.id,
                    name: card.title,
                    price: card.price,
                    image: currentImg,
                  })
                }
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
                      onClick={() => handleColorClick(card.id, c)}
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