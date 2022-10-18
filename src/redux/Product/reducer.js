import { ADD_ITEM, DELETE_ITEM } from "./types";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        count: state.count + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;

// como usar fetch o accion para trae o modificar algo en el estado
