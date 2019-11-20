import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SET_AUTHED_USER
} from "../actions/";

const initialState = {
  userId: null,
  isFetching: false,
  isLoggedIn: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        userId: action.payload
      };
    case SET_AUTHED_USER:
      return {
        ...state,
        isFetching: false,
        isLoggedIn: true,
        userId: action.payload
      };

    default:
      return state;
  }
};
