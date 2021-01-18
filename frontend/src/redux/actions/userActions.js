import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  CLEAR_USERS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CLEAR_DELETE_USER_MESSAGE,
  EDIT_USER_REQUEST,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  EDIT_USER_RESET,
} from "../types/userTypes";

// LOGIN USER

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAIL, payload: err.message });
  }
};

// LOGOUT USER

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem("userInfo");
  dispatch({ type: CLEAR_USERS })
  dispatch({ type: EDIT_USER_RESET })
};

// REGISTER

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({ type: USER_REGISTER_FAIL, payload: err.message });
  }
};

// GET PROFILE

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: USER_PROFILE_FAIL, payload: err.message });
  }
};

// UPDATE PROFILE

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.put('/api/users/profile', user, config);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: UPDATE_PROFILE_FAIL, payload: err.message });
  }
};

// GET ALL USERS

export const getAllUsers = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users`, config);

    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: GET_USERS_FAIL, payload: err.message });
  }
};

// DELETE USER

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });

    const config = {
      headers: {
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/users/${id}`, config);

    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: DELETE_USER_FAIL, payload: err.message });
  }
};

// CLEAR DELETE MESSAGE

export const clearDeleteMsg = () => async (dispatch) => dispatch({ type: CLEAR_DELETE_USER_MESSAGE });

// EDIT USER

export const editUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: EDIT_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/users/${user._id}`, user, config);

    dispatch({ type: EDIT_USER_SUCCESS, payload: data });

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: EDIT_USER_FAIL, payload: err.message });
  }
};

// CLEAR EDIT MESSAGES

export const clearEditMsg = () => async (dispatch) => dispatch({ type: EDIT_USER_RESET });