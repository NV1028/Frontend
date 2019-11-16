import React, { useState, useEffect } from "react";
import axiosAuth from "../utils/axiosAuth"
import { Link } from 'react-router-dom'

const StoriesForm = (props) => {
  const [data, setData] = useState({ 
    "title": "",
    "contents": "",
    "email": "",
    "user_id": null,
    "pending":0
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
      .post('/stories', data)
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
          name='id'
          type='text'
          placeholder='id'
          value={data.user_id}
          onChange={e => handleChange(e)}
        />
        <input
          name='email'
          type='email'
          placeholder='email'
          value={data.email}
          onChange={e => handleChange(e)}
        />
         <input
          name='title'
          type='text'
          placeholder='title'
          value={data.title}
          onChange={e => handleChange(e)}
        />
          <input
          name='contents'
          type='text'
          placeholder='content'
          value={data.contents}
          onChange={e => handleChange(e)}
        />
        <button type='submit'>Submit Story</button>
      </form>
    </>
  );
};


export default StoriesForm
