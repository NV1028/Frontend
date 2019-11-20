import React, { useState, useEffect } from "react";
import axiosAuth from "../utils/axiosAuth"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { login }  from '../actions'

const Login = (props) => {
  const [creds, setCreds] = useState({ 
      "email": "",
      "password": ""
    });
  const [userId, setUserId] = useState("")


  const handleChange = e => {
    console.log(e);
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(creds)
    // axiosAuth()
    //   .post('/api/auth/login', creds)
    //   .then(res => {
    //     console.log(res.data)
    //     localStorage.setItem('token', res.data.token)
    //     localStorage.setItem("id", res.data.userid)
    //     setUserId(res.data.userid)
    //     console.log(res.data)
        props.login(creds, props.history)
        props.history.push('/events');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h3>Please login or register</h3>
  <div><Link to={"/register"}>register</Link></div>
      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={creds.email}
          onChange={e => handleChange(e)}
        />
        <input
          name='password'
          type='text'
          placeholder='Password'
          value={creds.password}
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}



export default connect(
  mapStateToProps,
  { login }
)(Login);



