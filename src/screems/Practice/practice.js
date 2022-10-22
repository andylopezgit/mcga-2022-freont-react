import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../../redux/Product/actions";
import { getProducts } from "../../redux/BackendProduct/thunks";

// import { setIsLoading } from "../../redux/BackendProduct/actions";

function Practice() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(() => getProducts(dispatch));
  }, []);
  const { isLoadingProducts } = useSelector((state) => state.product);
  console.log("isLoadingProducts", isLoadingProducts);
  return (
    <>
      {/*<div>Count: {count}</div>*/}
      {/*<button onClick={() => dispatch(increaseCounter())}>*/}
      {/*  Increase Count*/}
      {/*</button>*/}
      {/*<button onClick={() => dispatch(decreaseCounter())}>*/}
      {/*  Decrease Count*/}
      {/*</button>*/}
      <h1>Vista practice</h1>
      <p>isLoading: {String(isLoadingProducts)}</p>
      <p>Product: {JSON.stringify(product)}</p>
      <button onClick={() => dispatch(() => getProducts(dispatch))}>
        Get Products
      </button>
    </>
  );
}

export default Practice;
