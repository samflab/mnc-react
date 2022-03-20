import { ACTION_TYPE } from "../util/actionType";

export const cartReducer = (state, action) => {
  switch (ACTION_TYPE) {
    case ACTION_TYPE.ADD_TO_CART:
      //check if a product is in cart
      let productInCartIndex = state.findIndex(
        (item) => item._id === action.payload._id
      );

      //if product not in cart
      if (productInCartIndex === -1) {
        return [...state, { ...action.payload, quantity: 1 }]; //return the product with quantity as 1
      }
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 } //otherwise add 1 to the quantity
          : item
      );

    case ACTION_TYPE.REMOVE_FROM_CART:
      return state.filter((item) => item._id !== action.payload._id);

    case ACTION_TYPE.INCREASE_QUANTITY:
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case ACTION_TYPE.DECREASE_QUANTITY:
      return state.map((item) =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      
    default:
      return state;
  }
};
