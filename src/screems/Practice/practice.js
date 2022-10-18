import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {decreaseCounter, increaseCounter} from "../../redux/Product/actions";
import {getProducts} from "../../redux/BackendProduct/actions";

function Practice() {
    const dispatch = useDispatch();
    const {count} = useSelector((state) => state.counter);
    const {product} = useSelector((state) => state.product);
    return (
        <>
            <div>Count: {count}</div>

            <button onClick={() => dispatch(increaseCounter())}>
                Increase Count
            </button>

            <button onClick={() => dispatch(decreaseCounter())}>
                Decrease Count
            </button>

            <p>Post: {JSON.stringify(product)}</p>

            <button onClick={() => dispatch(getProducts())}>Traer</button>
        </>
    );
}

export default Practice;
