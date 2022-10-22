import React from "react";
import styles from "./index.module.css";

const Product = ({ product }) => {
  console.log("desde product", JSON.stringify(product));
  const prod = product.map((item) => {
    return (
      <tr>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.stock}</td>
      </tr>
    );
  });
  return (
    <div className={styles.container}>
      <table>
        <caption>Listado de Productos</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>STOCK</th>
          </tr>
        </thead>
        {prod}
      </table>
    </div>
  );
};

export default Product;
