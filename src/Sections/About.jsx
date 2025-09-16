import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
    
<section className={styles.aboutSection}>
    <div className={styles.aboutBox}>
    <div className={styles.AboutAllContent}>
    <div className={styles.aboutContent} data-aos="fade-up">
      <p className={styles.subTitle}>“ ABOUT OUR BRAND ”</p>
      <h2 className={styles.title}>Built On Quality & Trust</h2>
      <p className={styles.desc}>
        Our brand was founded with a simple mission — to bring products that
        combine quality, style, and everyday practicality. What started as a
        small idea has grown into a trusted store for thousands of customers.
        We believe in thoughtful design, fair pricing, and delivering more than
        just items — we deliver experiences. Every product in our collection is
        carefully chosen to reflect our commitment to excellence.
      </p>
      <a className={styles.learnMore}>
        Learn More →
      </a>
    </div>
    </div>
  </div>
  
</section>

</>
  );
};

export default About;
