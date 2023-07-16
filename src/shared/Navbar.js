import React from "react";

//react router dom
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

//icons
import shopIcon from "../assets/icons/shop.svg";

//styles
import styles from "./Navbar.module.css";

const Navbar = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div>
          <Link to="/products">Products</Link>
        </div>
        <div className={styles.shopIcon}>
          <Link to="/cart">
            <img src={shopIcon} alt="shop icon" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
