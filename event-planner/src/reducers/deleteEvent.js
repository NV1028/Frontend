import {
    DELETE_EVENT_REQUEST,
    DELETE_EVENT_FAILURE,
    DELETE_EVENT_SUCCESS
  } from "../actions/";
  
  const initialState = {
    isLoggedIn: true,
    isDeleting: false,
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_EVENT_REQUEST:
        return {
          ...state,
          isDeleting: true
        };
      case DELETE_EVENT_FAILURE:
        return {
          ...state,
          isDeleting: true
        };
      case DELETE_EVENT_SUCCESS:
        return {
          ...state,
          isDeleting: false,
        };
      default:
        return state;
    }
  };
  