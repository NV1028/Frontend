import {
  USER_FETCH_REQUEST,
  USER_FETCH_FAILURE,
  USER_FETCH_SUCCESS
} from "../actions/";

const initialState = {
  isFetchingUser: false,
  user: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        isFetchingUser: true
      };
    case USER_FETCH_FAILURE:
      return {
        ...state,
        isFetchingUser: true
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingUser: false,
        user: action.payload
      };
    default:
      return state;
  }
};
