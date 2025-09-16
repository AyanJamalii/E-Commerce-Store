import React from 'react';
import styles from "../styles/Testimonial.module.css";
import testimonialImg from '../Assests/Images/testimonial-img.jpg'
const Testimonials = () => {
  const reviews = [
    { name: "Anonymous", text: "Amazing experience! The product quality exceeded my expectations and the delivery was super fast. I'll definitely shop here again.", stars: 5 },
    { name: "Anonymous", text: "Amazing experience! The product quality exceeded my expectations and the delivery was super fast. I'll definitely shop here again.", stars: 5 },
    { name: "Anonymous", text: "Amazing experience! The product quality exceeded my expectations and the delivery was super fast. I'll definitely shop here again.", stars: 5 },
    { name: "Anonymous", text: "Amazing experience! The product quality exceeded my expectations and the delivery was super fast. I'll definitely shop here again.", stars: 5 },
    { name: "Anonymous", text: "Amazing experience! The product quality exceeded my expectations and the delivery was super fast. I'll definitely shop here again.", stars: 5 },
    { name: "Anonymous", text: "Amazing experience! The product quality exceeded my expectations and the delivery was super fast. I'll definitely shop here again.", stars: 5 },
  ];

  return (
    <section className={styles.feedbackSection} >
      <div className={styles.headings} data-aos="fade">
        <h2>What Are Customer Says</h2>
        <span className={styles.subheading}>
          Trusted by thousands of happy customers worldwide.
        </span>
        <p>🚚 Fast Delivery | ⭐ Top Quality | 💬 24/7 Support</p>
      </div>

      <div className={styles.testimonialsWrapper}>
        <div className={styles.row} data-aos="fade-right">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.userInfo}>
                <img src={testimonialImg} alt="profile" className={styles.avatar} />
                <span>{review.name}</span>
                </div>
                <span className={styles.stars}>{"⭐".repeat(review.stars)}</span>
              </div>
                <div className={styles.decorline}></div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.row} ${styles.offsetRow}`} data-aos="fade-left">
          {reviews.slice(3, 6).map((review, index) => (
              <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.userInfo}>
                <img src={testimonialImg} alt="profile" className={styles.avatar} />
                <span>{review.name}</span>
                </div>
                <span className={styles.stars}>{"⭐".repeat(review.stars)}</span>
              </div>
                <div className={styles.decorline}></div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
