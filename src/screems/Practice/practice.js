import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decreaseCounter, increaseCounter } from "../../redux/Product/actions";

function Practice() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <>
      <div>Count: {count}</div>

      <button onClick={() => dispatch(increaseCounter())}>
        Increase Count
      </button>

      <button onClick={() => dispatch(decreaseCounter())}>
        Decrease Count
      </button>
    </>
  );
}

export default Practice;
