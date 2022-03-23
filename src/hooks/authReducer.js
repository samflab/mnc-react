import { ACTION_TYPE } from "../util";

const currentUser = localStorage.getItem("currentUser");

const userData = currentUser ? JSON.parse(currentUser).data.foundUser : "";
const encodedToken = currentUser ? JSON.parse(currentUser).encodedToken : "";

export const initialState = {
  userData: userData || "",
  encodedToken: encodedToken || "",
  loading: false,
  isLoggedIn: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    //getting the user data
    case ACTION_TYPE.AUTH_REQUEST:
      return { ...state, loading: true };
    //if login is success
    case ACTION_TYPE.LOGIN:
      return {
        ...initialState,
        userData: action.payload.data.foundUser,
        encodedToken: action.payload.data.encodedToken,
        isLoggedIn: true,
        loading: false,
      };
    case ACTION_TYPE.SIGNUP:
      return{
        ...initialState,
        userData:action.payload.data.createdUser,
        encodedToken: action.payload.data.encodedToken,
        isLoggedIn: true,
        loading: false,
      }
    case ACTION_TYPE.FAILURE:
      return {
        ...initialState,
        userData: "",
        encodedToken: "",
        isLoggedIn: false,
        loading: false,
      };
    case ACTION_TYPE.LOGOUT:
      return {
        ...initialState,
        userData: null,
        encodedToken: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
