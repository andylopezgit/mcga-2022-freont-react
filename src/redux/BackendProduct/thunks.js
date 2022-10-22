import {
  setProducts,
  showProducts,
  dismissIsLoading,
  setIsLoading,
} from "./actions";

export const getProducts = async (dispatch) => {
  dispatch(setIsLoading());
  let response = await fetch(
    "https://mcga-2022-backend.vercel.app/api/products"
  );
  //let response = await fetch("http://localhost:3000/api/products");
  const data = await response?.json();
  if (data) {
    dispatch(setProducts(data));
    dispatch(dismissIsLoading());
  }
  if (data.status === 400) {
    dispatch(setProducts([]));
    dismissIsLoading();
  }
  dismissIsLoading();
};