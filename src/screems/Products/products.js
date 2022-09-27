import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((datos) => {
        setProducts(datos);
      });
  }, [products]);
  return (
    <div>
      <h1>Tabla de producto</h1>
      {products.length}
      {products.map((product) => {
        return (
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.username}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
};

export { Products };
