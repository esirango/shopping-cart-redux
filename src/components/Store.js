import React, { useEffect } from "react";

// Components
import Product from "../shared/Product";
import Loader from "./Loader";

//styles
import styles from "./Store.module.css";

// Redux
import { fetchProducts } from "../redux/products/productAction";
import { useDispatch, useSelector } from "react-redux";

const Store = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.productsState);

  useEffect(() => {
    if (!productsState.products.length) dispatch(fetchProducts());
  }, [dispatch, productsState.products.length]);

  return (
    <div className={styles.Container}>
      {productsState.loading ? (
        <Loader />
      ) : productsState.error ? (
        <p>{productsState.error}</p>
      ) : (
        productsState.products.map((product) => (
          <Product key={product.id} productData={product} />
        ))
      )}
    </div>
  );
};

export default Store;
