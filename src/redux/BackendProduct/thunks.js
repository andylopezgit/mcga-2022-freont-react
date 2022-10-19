import {
  setProducts,
  showProducts,
  dismissIsloading,
  setIsLoading,
} from "./actions";

export const getProducts = async (dispatch) => {
  dispatch(setIsLoading());
  // let response = await fetch(
  //   "https://mcga-2022-backend.vercel.app/api/products"
  // );
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response?.json();
  if (data) {
    dispatch(setProducts(data));
    dispatch(dismissIsloading());
  }
  if (data.status === 400) {
    dispatch(setProducts([]));
    dismissIsloading();
  }
  dismissIsloading();
};
