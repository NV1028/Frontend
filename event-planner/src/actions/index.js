import axiosAuth from "../utils/axiosAuth"

export const LOGIN_REQUEST = "LOGIN_START"
export const LOGIN_FAILURE = "REQUEST_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const login = (creds, history) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    axiosAuth()
    .post('/api/auth/login', creds)
    .then(res => {
         console.log(res.data)
         localStorage.setItem("token", res.data.token)
         localStorage.setItem("id", res.data.userid)
         dispatch({type: LOGIN_SUCCESS, payload: res.data.userid})
         history.push('/events')
    })
    .catch(err => console.log(err.res))
    dispatch({type: LOGIN_FAILURE})
}


export const SET_AUTHED_USER = "SET_AUTHED_USER"

export const setUser = (id) => {
    return {
        type: "SET_AUTHED_USER", payload: id
    }
}

export const REGISTER_REQUEST = "REGISTER_REQUEST"
export const REGISTER_FAILURE = "REQUEST_FAILURE"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"

export const register = (regInfo, history) => (dispatch) => {
    dispatch({ type: REGISTER_REQUEST })
    axiosAuth()
    .post('/api/auth/register', regInfo)
    .then(res => {
         console.log(`rigister successfull ${res.data}`)
         dispatch({type: REGISTER_SUCCESS, payload: res.data})

         history.push('/login')
    })
    .catch(err => console.log(err.res))
    dispatch({type: REGISTER_FAILURE})
}

export const NEW_EVENT_FORM_REQUEST = "NEW_EVENT_FORM_REQUEST" 
export const NEW_EVENT_FORM_FAILURE = "NEW_EVENT_FORM_FAILURE"
export const NEW_EVENT_FORM_SUCCESS = "NEW_EVENT_FORM_SUCCESS"

export const newEventForm = (eventValues, history) => (dispatch) => {
    dispatch({ type: NEW_EVENT_FORM_REQUEST })
    axiosAuth()
    .post('/api/events/', eventValues)
    .then(res => {
         console.log(`new Event successfully created`)
         console.log(res.data)
         dispatch({type: NEW_EVENT_FORM_SUCCESS, payload: res.data})
         history.push('/events')
    })
    .catch(err => console.log(err.res))
    dispatch({type: REGISTER_FAILURE})
}

export const EVENTS_FETCH_REQUEST = "EVENTS_FETCH_REQUEST" 
export const EVENTS_FETCH_FAILURE = "EVENTS_FETCH_FAILURE"
export const EVENTS_FETCH_SUCCESS = "EVENTS_FETCH_SUCCESS"

export const fetchEvents = (id) => (dispatch) => {
    dispatch({type: EVENTS_FETCH_REQUEST})
    // let id = parseInt(localStorage.getItem('id'))
    // const id = props.login.userId
    axiosAuth()
    .get(`/api/events/user/${id}`)
    .then(res => {
         console.log(res.data)
         dispatch({type: EVENTS_FETCH_SUCCESS, payload: res.data})
        })
        .catch(err => console.log(err.res))
        dispatch({type: EVENTS_FETCH_FAILURE})
    }