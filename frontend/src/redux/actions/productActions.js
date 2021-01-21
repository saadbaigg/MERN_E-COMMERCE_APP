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
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  ADD_REVIEW_REQUEST,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAIL,
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

export const clearDeleteMsg = () => async (dispatch) =>
  dispatch({ type: CLEAR_DELETE_PRODUCT_MESSAGE });

// CREATE PRODUCT

export const createProduct = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/products", {}, config);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CREATE_PRODUCT_FAIL, payload: err.message });
  }
};

// UPDATE PRODUCT

export const updateProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PRODUCT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/products/${product._id}`,
      product,
      config
    );
    dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: UPDATE_PRODUCT_FAIL, payload: err.message });
  }
};

// ADD REVIEW

export const addProductReview = (id, rating, comment) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ADD_REVIEW_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `/api/products/${id}/review`,
      { rating, comment },
      config
    );
    dispatch({ type: ADD_REVIEW_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ADD_REVIEW_FAIL, payload: err.message });
  }
};
