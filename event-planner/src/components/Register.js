import React, { useState, useEffect } from "react";
import axiosAuth from "../utils/axiosAuth";
import { Link } from "react-router-dom";

const Register = props => {
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
    company: ""
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
    console.log(data);
    axiosAuth()
      .post("/api/auth/register", data)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        props.history.push("/user");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="FormCenter">
        <h3>Please register</h3>
        <div>
          <Link to={"/"}>Home </Link>
        </div>
        <form onSubmit={handleSubmit} className="RegisterForm">
          <br />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={data.email}
            className="formInput"
            onChange={e => handleChange(e)}
          />
          <br />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            className="formInput"
            onChange={e => handleChange(e)}
          />
          <br />
          <br />
          <input
            name="role"
            type="test"
            placeholder="Role"
            value={data.role}
            className="formInput"
            onChange={e => handleChange(e)}
          />
          <br />
          <br />
          <input
            name="company"
            type="text"
            placeholder="Company"
            value={data.company}
            className="formInput"
            onChange={e => handleChange(e)}
          />
          <br />
          <br />
          <button id="login-button" className="submit-button" type="submit">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
