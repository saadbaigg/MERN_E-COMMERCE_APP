import axios from "axios"
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from "../types/userTypes"

export const login = (email, password) => (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
        "Content-Type": "application/json",
      }
    }

    const { data } = await axios.post('/api/users/login', { email, password }, config)

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

    localStorage.setItem('userInfo', data)
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }

}
