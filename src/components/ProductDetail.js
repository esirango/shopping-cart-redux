import React from "react";

// Redux
import { useSelector } from "react-redux";

//react router dom
import { Link, useParams } from "react-router-dom";

//styles
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const params = useParams();
  const data = useSelector((state) => state.productsState.products);
  const id = params.id;
  const product = data[id - 1];

  const { image, title, description, category, price } = product;

  return (
    <div className={styles.Container}>
      <div>
        <img src={image} alt="product" />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>Category:</span> {category}
        </p>
        <div className={styles.links}>
          <span>{price} $</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
