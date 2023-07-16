import React from "react";

//fuctions
import { shorten } from "../helpers/functions";

//icons
import trashIcon from "../assets/icons/trash.svg";

//styles
import styles from "./Cart.module.css";

// Redux
import { useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../redux/cart/cartAction";

const Cart = (props) => {
  const { image, title, price, quantity } = props.data;

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div>
        <img src={image} alt="product" />
      </div>
      <div className={styles.firstContents}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div className={styles.buttons}>
        {quantity > 1 ? (
          <button
            className={styles.smallButtons}
            onClick={() => dispatch(decrease(props.data))}
          >
            -
          </button>
        ) : (
          <button
            className={styles.smallButtons}
            onClick={() => dispatch(removeItem(props.data))}
          >
            <img src={trashIcon} alt="trash" />
          </button>
        )}
        <button
          className={styles.smallButtons}
          onClick={() => dispatch(increase(props.data))}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
