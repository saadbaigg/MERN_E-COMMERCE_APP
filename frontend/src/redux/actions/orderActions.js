import axios from "axios";
import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  GET_MY_ORDERS_REQUEST,
  GET_MY_ORDERS_SUCCESS,
  GET_MY_ORDERS_FAIL,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAIL,
} from "../types/orderTypes";

// Create order

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({ type: CREATE_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/orders", order, config);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CREATE_ORDER_FAIL, payload: err.message });
  }
};

// get order by id

export const getOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/${id}`, config);

    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: err.message });
  }
};

// update order

export const updateOrder = (id, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/orders/${id}/pay`,
      paymentResult,
      config
    );

    dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: ORDER_PAY_FAIL, payload: err.message });
  }
};

// get my orders

export const getMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_MY_ORDERS_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders/myorders`, config);

    dispatch({ type: GET_MY_ORDERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_MY_ORDERS_FAIL, payload: err.message });
  }
};

// get all orders

export const getAllOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ALL_ORDERS_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/orders`, config);

    dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_ALL_ORDERS_FAIL, payload: err.message });
  }
};
