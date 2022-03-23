import axios from "axios";
import { ACTION_TYPE } from "./actionType";

export const userLogin = async (dispatch, payload) => {
  try {
    dispatch({ type: ACTION_TYPE.AUTH_REQUEST });

    const response = await axios.post("/api/auth/login", payload);
    dispatch({ type: ACTION_TYPE.LOGIN, payload: response });

    if (response.status === 200 || 201)
      localStorage.setItem("currentUser", JSON.stringify(response));

    return response;
  } catch (err) {
    console.error("Error", err);
  }
};

export const userSignup = async (dispatch, payload) => {
  try {
    dispatch({ type: ACTION_TYPE.AUTH_REQUEST });
    const response = await axios.post("/api/auth/signup", payload);
    dispatch({ type: ACTION_TYPE.SIGNUP, payload: response });

    if (response.status === 200 || 201)
      localStorage.setItem("currentUser", JSON.stringify(response));

    return response;
  } catch (err) {
    console.error("Error", err);
  }
};

export const userLogout = (dispatch) => {
  try {
    localStorage.removeItem("currentUser");
    dispatch({ type: ACTION_TYPE.LOGOUT });
  } catch (err) {
    console.error("Error", err);
  }
};
