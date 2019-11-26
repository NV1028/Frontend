import {
  SINGLE_EVENT_FETCH_REQUEST,
  SINGLE_EVENT_FETCH_FAILURE,
  SINGLE_EVENT_FETCH_SUCCESS
} from "../actions/";

const initialState = {
  isLoggedIn: true,
  isFetchingEvents: false,
  singleEvent:{  
  // event_name: "",
  // description: "",
  // event_date: "",
  // event_time: "",
  // budget: "",
  // assigned_to_user: null
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_EVENT_FETCH_REQUEST:
      return {
        ...state,
        isFetchingSingleEvent: true
      };
    case SINGLE_EVENT_FETCH_FAILURE:
      return {
        ...state,
        isFetchingSingleEvent: false
      };
    case SINGLE_EVENT_FETCH_SUCCESS:
      return {
        ...state,
        isFetchingSingleEvent: false,
        singleEvent: action.payload
      };
    default:
      return state;
  }
};
