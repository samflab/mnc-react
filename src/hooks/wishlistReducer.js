import { ACTION_TYPE } from "../util/actionType";

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TO_WISHLIST:
      return [...state, action.payload];

    case ACTION_TYPE.REMOVE_FROM_WISHLIST:
      return state.filter((item) => item._id !== action.payload._id);
      
    default:
      return state;
  }
};
