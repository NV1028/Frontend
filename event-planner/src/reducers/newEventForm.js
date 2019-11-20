import {
    NEW_EVENT_FORM_REQUEST, 
    NEW_EVENT_FORM_FAILURE,
    NEW_EVENT_FORM_SUCCESS,
} from  '../actions/'

const initialState = {
    isSubmittingNewEvent: false,
    isLoggedIn: true,
    newEventPayload: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
         case NEW_EVENT_FORM_REQUEST:
              return{  
                   ...state,
                   isSubmittingNewEvent: true,
              }
         case NEW_EVENT_FORM_FAILURE: 
              return{
                   ...state,
                   isSubmittingNewEvent: true
              }
         case NEW_EVENT_FORM_SUCCESS:
              return{
                ...state,
                isSubmittingNewEvent: false,
                newEventPayload: action.payload
              }

           
      
    default:
         return state;
    }
}

