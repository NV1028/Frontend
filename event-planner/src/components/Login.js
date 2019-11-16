import React, { useState, useEffect } from "react";
import axiosAuth from "../utils/axiosAuth"
import { Link } from 'react-router-dom'

const Login = (props) => {
  const [data, setData] = useState({ 
      "username": "",
      "password": ""
    });
  const [user, setUser] = useState("user")


  const handleChange = e => {
    console.log(e);
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(data)
    axiosAuth()
      .post('/users/login', data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        props.history.push('/');
        setUser(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h3>Please login or register</h3>
  <div><Link to={"/register"}>register</Link></div>
      <form onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='username'
          value={data.username}
          onChange={e => handleChange(e)}
        />
        <input
          name='password'
          type='text'
          placeholder='Password'
          value={data.password}
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Log In</button>
      </form>
    </>
  );
};


export default Login
