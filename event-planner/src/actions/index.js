import axiosAuth from "../utils/axiosAuth";

// ACTION LOGS IN A USER
export const LOGIN_REQUEST = "LOGIN_START";
export const LOGIN_FAILURE = "REQUEST_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const login = (creds, history) => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  axiosAuth()
    .post("/api/auth/login", creds)
    .then(res => {
      // console.log(res.data.message);
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.userid });
      history.push("/events");
    })
    .catch(err => {
      console.log(err.data);
      dispatch({ type: LOGIN_FAILURE });
    });
};

// ACTION RETURNS A USER ID AFTER AUTHENTICAION
export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const setUser = id => {
  return {
    type: "SET_AUTHED_USER",
    payload: id
  };
};

// ACTION REGISTERS A NEW USER
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_FAILURE = "REQUEST_FAILURE";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

export const register = (regInfo, history) => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  axiosAuth()
    .post("/api/auth/register", regInfo)
    .then(res => {
      console.log(`rigister successfull ${res.data}`);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      history.push("/login");
    })
    .catch(err => {
      console.log(err.data);
      dispatch({ type: REGISTER_FAILURE });
    });
};

// ACTION FETCHES USER INFORMATION GIVEN A USER ID
export const USER_FETCH_REQUEST = "USER_FETCH_REQUEST";
export const USER_FETCH_FAILURE = "USER_FETCH_FAILURE";
export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";

export const fetchUser = id => dispatch => {
  dispatch({ type: USER_FETCH_REQUEST });
  axiosAuth()
    .get(`/api/users/{id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: USER_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.data);
      dispatch({ type: USER_FETCH_FAILURE });
    });
};

// ACTION POSTS A NEW EVENT TO API THOUGH THE API IS ONLY RETURNING AN EMPTY STRING
export const NEW_EVENT_FORM_REQUEST = "NEW_EVENT_FORM_REQUEST";
export const NEW_EVENT_FORM_FAILURE = "NEW_EVENT_FORM_FAILURE";
export const NEW_EVENT_FORM_SUCCESS = "NEW_EVENT_FORM_SUCCESS";

export const newEventForm = (eventValues, history) => dispatch => {
  dispatch({ type: NEW_EVENT_FORM_REQUEST });
  axiosAuth()
    .post("/api/events/", eventValues)
    .then(res => {
      console.log(`new Event successfully created`);
      console.log(res.data);
      dispatch({ type: NEW_EVENT_FORM_SUCCESS, payload: res.data });
      history.push("/events");
    })
    .catch(err => {
      console.log(err.res);
      dispatch({ type: NEW_EVENT_FORM_FAILURE });
    });
};

// ACTION FETCHES SINGLE EVENT
export const SINGLE_EVENT_FETCH_REQUEST = "SINGLE_EVENT_FETCH_REQUEST";
export const SINGLE_EVENT_FETCH_FAILURE = "SINGLE_EVENT_FETCH_FAILURE";
export const SINGLE_EVENT_FETCH_SUCCESS = "SINGLE_EVENT_FETCH_SUCCESS";

export const fetchSingleEvent = id => dispatch => {
  dispatch({ type: SINGLE_EVENT_FETCH_REQUEST });
  axiosAuth()
    .get(`/api/events/${id}`)
    .then(res => {
      console.log(res.data.single);
      dispatch({ type: SINGLE_EVENT_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.res);
      dispatch({ type: SINGLE_EVENT_FETCH_FAILURE });
    });
};

// ACTION FETCHES EVENTS DATA FROM THE API
export const EVENTS_FETCH_REQUEST = "EVENTS_FETCH_REQUEST";
export const EVENTS_FETCH_FAILURE = "EVENTS_FETCH_FAILURE";
export const EVENTS_FETCH_SUCCESS = "EVENTS_FETCH_SUCCESS";

export const fetchEvents = id => dispatch => {
  dispatch({ type: EVENTS_FETCH_REQUEST });
  axiosAuth()
    .get(`/api/events/user/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: EVENTS_FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.res);
      dispatch({ type: EVENTS_FETCH_FAILURE });
    });
};

// ACTION DELETES A SINGLE EVENT FROM THE API
export const DELETE_EVENT_REQUEST = "DELETE_EVENT_REQUEST";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";

export const deleteEvent = (eventId, history) => dispatch => {
  dispatch({ type: DELETE_EVENT_REQUEST });
  axiosAuth()
    .delete(`/api/events/${eventId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_EVENT_SUCCESS });
      history.push("/events")
    })
    .catch(err => {
      console.log(err.data);
      dispatch({ type: DELETE_EVENT_FAILURE });
    });
};


// ACTION UPDATES AN EXISTING EVENT
export const UPDATE_EVENT_REQUEST = "UPDATE_EVENT_REQUEST";
export const UPDTATE_EVENT_FAILURE = "UPDTATE_EVENT_FAILURE";
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";

export const updateEvent = (eventId, history) => dispatch => {
  dispatch({ type: UPDATE_EVENT_REQUEST });
  axiosAuth() 
    .put(`/api/events/${eventId}`)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDTATE_EVENT_FAILURE });
      history.push("/events")
    })
    .catch(err => {
      console.log(err.data);
      dispatch({ type: DELETE_EVENT_FAILURE });
    });
};


