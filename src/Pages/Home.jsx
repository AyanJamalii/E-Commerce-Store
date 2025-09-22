import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card from "../Components/Card";
import { menProducts } from "../Data/Products";
import Button from "../Components/Button";
import SpecialCollection from "../Sections/SpecialCollection";
import About from "../Sections/About";
import Testimonials from "../Sections/Testimonials";
import Shops from "../Sections/Shops";

const slides = [
  { id: 1, type: "video", src: "/images/main.mp4" },
  { id: 2, type: "image", src: "/images/mainPic1.jpg" },
  { id: 3, type: "image", src: "/images/mainPic2.jpg" },
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoplay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const resetAutoplay = () => {
    startAutoplay();
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    resetAutoplay();
  };

  const goTo = (index) => {
    setCurrent(index);
    resetAutoplay();
  };

  return (
    <>
    <div 
    data-aos="fade-up"
      className={styles.homeBox}
      onMouseEnter={() => clearInterval(intervalRef.current)}
      onMouseLeave={() => startAutoplay()}
    >
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((s) => (
          <div key={s.id} className={styles.slide}>
            {s.type === "video" ? (
              <video
                src={s.src}
                autoPlay
                loop
                muted
                playsInline
                className={styles.media}
              />
            ) : (
              <img src={s.src} alt={`Slide ${s.id}`} className={styles.media} />
            )}
          </div>
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.left}`}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ArrowBackIosIcon />
      </button>

      <button
        className={`${styles.arrow} ${styles.right}`}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ArrowForwardIosIcon />
      </button>

      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>


            {/* PRODUCT SECTION  */}


      <div data-aos="fade-up" className={styles.productSection}>
        <h2>Our Products</h2>
        <div className={styles.decorLine}></div>
        <Card products={menProducts} limit={8}/>
        <Button />
      </div>


          {/* SPECIAL COLLECTION  */}

        <div className={styles.specialCollectionSec}>
          <SpecialCollection />
        </div>

          {/* ABOUT  */}

        <div className={styles.AboutSeciton}>
          <About />
        </div>


            {/* TESTIMONIALS SECTION  */}

           <div>
            <Testimonials />
            </div> 

                {/* SHOPS  */}

          <div>
            <Shops />
          </div>
          
    </>
  );
};

export default Home;
