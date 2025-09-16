import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} XYZ · All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
