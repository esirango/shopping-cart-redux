import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { checkout, clear } from "../redux/cart/cartAction";

//shared component
import Cart from "../shared/Cart";

//react router dom
import { Link } from "react-router-dom";

//styles
import styles from "./ShopCart.module.css";

const ShopCart = () => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles.cartContainer}>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>

      {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>total items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>total payments: </span>
            {state.total} $
          </p>
          <div className={styles.buttons}>
            <button onClick={() => dispatch(clear())}>Clear</button>
            <button onClick={() => dispatch(checkout())}>Check out</button>
          </div>
        </div>
      )}
      {state.itemsCounter === 0 && !state.checkout && (
        <div className={styles.complete}>
          <h3>want to buy?</h3>
          <Link to="/products">Go to shop</Link>
        </div>
      )}
      {state.checkout && (
        <div className={styles.complete}>
          <h3>Check out successfully</h3>
          <Link to="/products">Buy more</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
