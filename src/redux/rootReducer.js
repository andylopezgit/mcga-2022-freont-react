import { combineReducers } from "redux";

import counterReducer from "./Product/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  //product: productReducer
});

export default rootReducer;
