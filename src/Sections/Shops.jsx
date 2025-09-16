import React from 'react';
import styles from "../styles/Shops.module.css";

const Shops = () => {
  return (
    <section className={styles.ShopsSection} >
      {/* Map Box */}
      <div className={styles.mapBox} data-aos="fade">
        <iframe
          title="Our Shops Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.024476524903!2d67.03272887537988!3d24.86073467793883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d7f2f14ed5b%3A0x3bdb6f6f2c1f9f8e!2sDolmen%20Mall%20Clifton!5e0!3m2!1sen!2s!4v1695123456789!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Text Side */}
      <div className={styles.textSide} data-aos="fade-left">
        <h2>Our Shops<br />Across the Country</h2>
        <ul className={styles.shopList}>
          <li>📍 Karachi - Dolmen Mall Clifton</li>
          <li>📍 Lahore - Packages Mall</li>
          <li>📍 Islamabad - Centaurus Mall</li>
        </ul>

        {/* Google Maps Button */}
        <a 
          href="https://www.google.com/maps/place/Dolmen+Mall+Clifton/@24.8607347,67.0327289,17z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={styles.mapBtn}>View Karachi Store on Maps</button>
        </a>
      </div>
    </section>
  );
};

export default Shops;
