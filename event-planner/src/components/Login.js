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
    console.log(creds);
    props.login(creds, props.history);
    props.history.push("/events");
  };

  return (
    <>
      <h3>Please login or register</h3>
      <div>
        <Link to={"/register"}>register</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={creds.email}
          onChange={e => handleChange(e)}
        />
        <input
          name="password"
          type="text"
          placeholder="Password"
          value={creds.password}
          onChange={e => handleChange(e)}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { login })(Login);
