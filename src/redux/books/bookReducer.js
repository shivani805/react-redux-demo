import {
  USER_REQUEST,
  USER_SUCCESS,
  USER_ERROR,
  CHANGE_NAME,
} from "./bookType";

const initialState = {
  name: "Shivani Panda",
  request: false,
  user: null,
  error: "",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };
    case USER_REQUEST:
      return {
        ...state,
        request: true,
      };

    case USER_SUCCESS:
      return {
        ...state,
        request: false,
        user: action.user,
        error: "",
      };

    case USER_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.errorMessage,
      };

    default:
      return state;
  }
};

export default bookReducer;
