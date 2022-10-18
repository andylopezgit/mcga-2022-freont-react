import { combineReducers } from "redux";

import counterReducer from "./Product/reducer";
import productReducer from "./BackendProduct/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

export default rootReducer;
