import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions";

const Login = props => {
  const [creds, setCreds] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    console.log(e);
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(creds.email === ""){
      return alert("Please enter an email address");
    };
    if(creds.password === ""){
      return alert("Please enter a password");
    };
    console.log(creds);
    props.login(creds, props.history);
    props.history.push("/events");
  
  };

  return (
    <>
    <div className="FormCenter">
      <h3>Please Login or Register</h3>
      <div>
        <Link to={"/register"}>Register</Link>
      </div>
      <br>
      </br>
      <form className="RegisterForm" onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          className="formInput"
          placeholder="Email"
          value={creds.email}
          onChange={e => handleChange(e)}
        />
        <input
          name="password"
          type="text"
          className="formInput"
          placeholder="Password"
          value={creds.password}
          onChange={e => handleChange(e)}
        />
        <br>
        </br>
        <button id="login-button" className="submit-button" type="submit">Log In</button>
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

export default connect(mapStateToProps, { login })(Login);
