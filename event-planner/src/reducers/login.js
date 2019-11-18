import {
    LOGIN_REQUEST, 
    REQUEST_FAILURE,
    LOGIN_SUCCESS,
} from  '../actions/'

const initialState = {
    isFetching: false,
    isLoggedIn: false,
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
         case LOGIN_REQUEST:
              return{
                   ...state,
                   isFetching:true
              }
         case REQUEST_FAILURE: 
              return{
                   ...state,
                   isFetching:false
              }
         case LOGIN_SUCCESS:
              return{
                   ...state,
                   isFetching:false,
                   isLoggedIn:true
              }
      
    default:
         return state;
    }
}

