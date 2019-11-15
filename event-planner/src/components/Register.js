import React, { useState, useEffect } from "react";
import axiosAuth from "../utils/axiosAuth"
import { Link } from 'react-router-dom'

const Register = (props) => {
  const [data, setData] = useState({ 
    "email": "",
    "password": "",
    "role": "",
    "company": ""
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
      .post('/api/auth/register', data)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        props.history.push('/user');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h3>Please register</h3>
  <div><Link to={"/"}>Home </Link></div>
      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
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
         <input
          name='role'
          type='test'
          placeholder='role'
          value={data.role}
          onChange={e => handleChange(e)}
        />
        <input
          name='company'
          type='text'
          placeholder='company'
          value={data.company}
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Register</button>
      </form>
    </>
  );
};


export default Register
