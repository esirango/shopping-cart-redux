import React from "react";

// Functions
import { shorten, isInCart, quantityCount } from "../helpers/functions";

// react router dom
import { Link } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  addItem,
  removeItem,
} from "../redux/cart/cartAction";

//Icons
import trashIcon from "../../src/assets/icons/trash.svg";

//styles
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.Container}>
      <div className={styles.mainContainer}>
        <img
          className={styles.ContainerImg}
          src={productData.image}
          alt="product"
        />
        <div className={styles.ContainerContent}>
          <h3>{shorten(productData.title)}</h3>
          <p>{productData.price} $</p>
          <div className={styles.tags}>
            <Link to={`/products/${productData.id}`}>Details</Link>
            <div className={styles.buttons}>
              {quantityCount(state, productData.id) > 1 && (
                <button
                  className={styles.smallButtons}
                  onClick={() => dispatch(decrease(productData))}
                >
                  -
                </button>
              )}
              {quantityCount(state, productData.id) === 1 && (
                <button
                  className={styles.smallButtons}
                  onClick={() => dispatch(removeItem(productData))}
                >
                  <img src={trashIcon} alt="trash icon" />
                </button>
              )}
              {quantityCount(state, productData.id) > 0 && (
                <span className={styles.quantityCount}>
                  {quantityCount(state, productData.id)}
                </span>
              )}
              {isInCart(state, productData.id) ? (
                <button
                  className={styles.smallButtons}
                  onClick={() => dispatch(increase(productData))}
                >
                  +
                </button>
              ) : (
                <button
                  className={styles.addButton}
                  onClick={() => dispatch(addItem(productData))}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
