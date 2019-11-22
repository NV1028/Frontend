import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions";

const Register = props => {
  const [regInfo, setRegInfo] = useState({
    email: "",
    password: "",
    role: "",
    company: ""
  });

  const handleChange = e => {
    console.log(e);
    setRegInfo({
      ...regInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(regInfo);
    if(regInfo.email === ""){
      return alert("Please enter an email address");
    };
    if(regInfo.password === ""){
      return alert("Please enter a password");
    };
    if(regInfo.role === ""){
      return alert("Please enter a role");
    };
    if(regInfo.company === ""){
      return alert("Please enter a company");
    };
    props.register(regInfo, props.history);
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
            value={regInfo.email}
            className="formInput"
            onChange={e => handleChange(e)}
          />
          <br />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={regInfo.password}
            className="formInput"
            onChange={e => handleChange(e)}
          />
          <br />
          <br />
          <input
            name="role"
            type="test"
            placeholder="Role"
            value={regInfo.role}
            className="formInput"
            onChange={e => handleChange(e)}
          />
          <br />
          <br />
          <input
            name="company"
            type="text"
            placeholder="Company"
            value={regInfo.company}
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

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { register })(Register);
