import React from 'react'
import styles from "../styles/Home.module.css";
import { Link } from 'react-router-dom';
import { ArrowRightAlt } from '@mui/icons-material';

const Button = () => {
  return (
    <div className={styles.btnContainer}>
      <Link to="/men" className={styles.viewProductBtn}>
        View All <ArrowRightAlt className={styles.icon} />
      </Link>
    </div>
  )
}

export default Button
