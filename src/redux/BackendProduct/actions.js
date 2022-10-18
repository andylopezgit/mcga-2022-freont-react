import { GET_PRODUCTS } from "./types";

export const getProducts = () => {
  let arr = [];

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((datos) => {
      arr.push(datos);
    });
  return {
    type: GET_PRODUCTS,
    payload: arr,
  };
};
