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
  GET_ALL_ORDERS_RESET,
} from "../types/orderTypes";

export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { loading: true };
    case CREATE_ORDER_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case CREATE_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, success: true, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_PAY_RESET:
      return {};
    default:
      return state;
  }
};

export const myOrdersReducer = (state = { myOrders: [] }, action) => {
  switch (action.type) {
    case GET_MY_ORDERS_REQUEST:
      return { ...state, loading: true };
    case GET_MY_ORDERS_SUCCESS:
      return { loading: false, success: true, myOrders: action.payload };
    case GET_MY_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allOrdersReducer = (state = { allOrders: [] }, action) => {
  switch (action.type) {
    case GET_ALL_ORDERS_REQUEST:
      return { loading: true };
    case GET_ALL_ORDERS_SUCCESS:
      return { loading: false, success: true, allOrders: action.payload };
    case GET_ALL_ORDERS_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_ORDERS_RESET:
      return {};
    default:
      return state;
  }
};
