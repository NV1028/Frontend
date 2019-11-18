import axiosAuth from "../utils/axiosAuth"

export const LOGIN_REQUEST = "LOGIN_START"
export const REQUEST_FAILURE = "REQUEST_FAILURE"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const login = (creds, history) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    axiosAuth()
    .post('/api/auth/login', creds)
    .then(res => {
         console.log(res)
         localStorage.setItem("token", res.data.token)
         localStorage.setItem("id", res.data.userid)
         dispatch({type: LOGIN_SUCCESS})
         history.push('/events')
    })
    .catch(err => console.log(err.res))
    dispatch({type: REQUEST_FAILURE})
}
