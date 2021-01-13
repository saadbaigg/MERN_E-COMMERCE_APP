import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SAVE_SHIPPING,
  SAVE_PAYMENT_METHOD,
} from "../types/cartTypes";

export const cartReducer = (
  state = { cartItems: [], shipping: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case SAVE_SHIPPING:
      return {
        ...state,
        shipping: action.payload,
      };
    case SAVE_PAYMENT_METHOD:
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};
