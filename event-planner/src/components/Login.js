import React, { useState, useEffect } from "react";
import axiosAuth from "../utils/axiosAuth"

const Login = (props) => {
  const [data, setData] = useState({
    email: "pam@dundermifflinpaperco.com",
    password: "pam123"
  });

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
      .post('/api/auth/login', data)
      .then(res => {
        console.log(res.body)
        localStorage.setItem('token', res.body.token)
        props.history.push('/user');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='email'
          placeholder='Email'
          value={data.email}
          onChange={e => handleChange(e)}
        />
        <input
          name='password'
          type='password'
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
