import React from "react";
import styles from "./index.module.css";
import Product from "../../components/Product/product";

const ProductsView = () => {
  return (
    <div className={styles.container}>
      <header>
        <h2>Listado de Productos</h2>
      </header>
      <Product />
    </div>
  );
};

export default ProductsView;
