import {
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from "../actions/";

const initialState = {
  userId: null,
  isSubmitting: false,
  isLoggedIn: false,
  regUserId: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        isSubmitting: true
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isSubmitting: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        regUserId: action.payload
      };

    default:
      return state;
  }
};
