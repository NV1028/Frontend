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
