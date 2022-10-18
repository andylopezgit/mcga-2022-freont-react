import { GET_PRODUCTS } from "./types";

const INITIAL_STATE = {
  product: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
