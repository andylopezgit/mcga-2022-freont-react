import { ADD_ITEM, DELETE_ITEM } from "./types";

export const increaseCounter = () => {
  return {
    type: ADD_ITEM,
  };
};

export const decreaseCounter = () => {
  return {
    type: DELETE_ITEM,
  };
};
