import React, { useState, useEffect } from "react";
import axiosAuth from "../utils/axiosAuth"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Login = (props) => {
  const [data, setData] = useState({ 
      "email": "",
      "password": ""
    });
  const [userId, setUserId] = useState("user")


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
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem("id", res.data.userid)
        setUserId(res.data.userid)
        console.log(res.data)
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
          value={data.email}
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
{
// function mapStateToProps(state) {
//   return {

//   };
// }

// const mapStateToProps = state => {
//   return{

//   }
// }



// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);
}
export default Login

