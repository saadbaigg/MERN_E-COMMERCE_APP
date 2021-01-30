import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  deleteProductReducer,
  createProductReducer,
  updateProductReducer,
  addReviewReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userProfileReducer,
  updateProfileReducer,
  allUsersReducer,
  deleteUserReducer,
  getUserReducer,
  editUserReducer,
} from "./reducers/userReducers";
import {
  allOrdersReducer,
  markAsDeliveredReducer,
  myOrdersReducer,
  orderDetailsReducer,
  orderReducer,
  updateOrderReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  deleteProduct: deleteProductReducer,
  createProduct: createProductReducer,
  updateProduct: updateProductReducer,
  cart: cartReducer,
  userProfile: userProfileReducer,
  userLogin: userLoginReducer,
  updateProfile: updateProfileReducer,
  allUsers: allUsersReducer,
  deleteUser: deleteUserReducer,
  getUser: getUserReducer,
  editUser: editUserReducer,
  order: orderReducer,
  orderDetails: orderDetailsReducer,
  updateOrder: updateOrderReducer,
  markAsDelivered: markAsDeliveredReducer,
  myOrders: myOrdersReducer,
  allOrders: allOrdersReducer,
  productReview: addReviewReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingFromStorage = localStorage.getItem("shipping")
  ? JSON.parse(localStorage.getItem("shipping"))
  : {};

const initialState = {
  cart: { cartItems: cartItemsFromStorage, shipping: shippingFromStorage },
  userProfile: { user: {} },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
