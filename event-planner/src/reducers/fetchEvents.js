import {
    EVENTS_FETCH_REQUEST, 
    EVENTS_FETCH_FAILURE,
    EVENTS_FETCH_SUCCESS,
} from  '../actions/'

const initialState = {
    isLoggedIn: true,
    isFetchingEvents: false,
    eventsList: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
         case EVENTS_FETCH_REQUEST:
              return{
                   ...state,
                   isFetchingEvents: true
              }
         case EVENTS_FETCH_FAILURE: 
              return{
                   ...state,
                   isFetchingEvents: false
              }
         case EVENTS_FETCH_SUCCESS:
              return{
                ...state,
                isFetchingEvents: false,
                eventsList: action.payload
            }
    default:
         return state;
    }
}

