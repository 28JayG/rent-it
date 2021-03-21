import { cartActionTypes } from "./cart.types";

const INITAL_STATE = {
  itemsCount: 0,
};

export const CartReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return { ...state, itemsCount: state.itemsCount + 1 };
    default:
      return { ...state };
  }
};
