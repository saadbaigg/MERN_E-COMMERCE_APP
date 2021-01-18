import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  CLEAR_DELETE_PRODUCT_MESSAGE,
} from "../types/productTypes";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

// DELETE PRODUCT

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/products/${id}`, config);

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: DELETE_PRODUCT_FAIL, payload: err.message });
  }
};

// CLEAR DELETE MESSAGE

export const clearDeleteMsg = () => async (dispatch) => dispatch({ type: CLEAR_DELETE_PRODUCT_MESSAGE });