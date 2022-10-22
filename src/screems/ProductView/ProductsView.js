import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import Product from "../../components/Product/product";
import { getProducts } from "../../redux/BackendProduct/thunks";

const ProductsView = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(() => getProducts(dispatch));
  }, []);

  return (
    <div className={styles.container}>
      <button onClick={() => dispatch(() => getProducts(dispatch))}>
        Get Products
      </button>
      <header>
        <h2>Listado de Productos</h2>
      </header>
      <section className={styles.section}>
        <h3>Tabla de Productos</h3>
        <article>
          {product.products !== undefined ? (
            <Product product={product.products} />
          ) : (
            <span> Cargando datos ...</span>
          )}
        </article>
      </section>
    </div>
  );
};

export default ProductsView;
