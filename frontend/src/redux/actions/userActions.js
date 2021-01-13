import axios from "axios"
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
} from "../types/userTypes"

// LOGIN USER

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    )

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAIL, payload: err.message })
  }
}

// LOGOUT USER

export const logout = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT })
  localStorage.removeItem('userInfo')
}

// REGISTER

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    )

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data })

    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (err) {
    dispatch({ type: USER_REGISTER_FAIL, payload: err.message })
  }
}

// UPDATE PROFILE

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getState().userLogin.userInfo.token}`
      },
    }

    const { data } = await axios.get(`/api/users/${id}`, config)

    dispatch({ type: USER_PROFILE_SUCCESS, payload: data })

  } catch (err) {
    dispatch({ type: USER_PROFILE_FAIL, payload: err.message })
  }
}