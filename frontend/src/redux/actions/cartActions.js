import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, SAVE_SHIPPING, SAVE_PAYMENT_METHOD } from "../types/cartTypes";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShipping = (data) => async (dispatch) => {
  dispatch({ type: SAVE_SHIPPING, payload: data })

  localStorage.setItem('shipping', JSON.stringify(data))
}

export const savePaymentMethod = (data) => async (dispatch) => {
  dispatch({ type: SAVE_PAYMENT_METHOD, payload: data })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
