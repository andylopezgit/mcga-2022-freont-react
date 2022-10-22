import {
  SHOW_PRODUCTS,
  SET_PRODUCTS,
  DISMISS_ISLOADING,
  SET_ISLOADING,
} from "./types";

// export const getProducts = () => {
//   let arr = [];
//   let testUser = [
//     { id: 1, name: "Andres" },
//     { id: 2, name: "Teo" },
//     { id: 3, name: "Mara" },
//   ];
//
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//       return response.json();
//     })
//     .then((datos) => {
//       arr.push(datos);
//     });
//   return {
//     type: GET_PRODUCTS,
//     payload: arr,
//   };
// };

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const showProducts = (products) => {
  return {
    type: SHOW_PRODUCTS,
    payload: {
      products: products,
    },
  };
};

export const setIsLoading = () => {
  return {
    type: SET_ISLOADING,
    isLoadingProducts: true,
  };
};

export const dismissIsLoading = () => {
  return {
    type: DISMISS_ISLOADING,
    isLoadingProducts: false,
  };
};
