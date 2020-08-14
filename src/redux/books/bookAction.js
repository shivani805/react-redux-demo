import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
  CHANGE_NAME,
} from "./bookType";
import Axios from "axios";

export const changeName = (payload) => {
  return {
    type: CHANGE_NAME,
    name: payload,
  };
};

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (user) => {
  return {
    type: USER_SUCCESS,
    user: user,
  };
};

export const userError = (message) => {
  return {
    type: USER_ERROR,
    errorMessage: message,
  };
};

export const fetchUser = (name) => {
  return function (dispatch) {
    dispatch(userRequest());
    Axios.get("https://jsonplaceholder.typicode.com/users") // 10 Sec
      .then((response) => {
        //response.data
        const user = { mobile: 85825456446 };
        dispatch(userSuccess(user));
        dispatch(changeName(name));
      })
      .catch((error) => {
        dispatch(userError(error.mesage));
      });
  };
};
