import React from "react";
import { NavLink } from "react-router-dom";

const LandingPage = props => {
  return (
    <div className="landingPage">
      <h1>Welcome To Big Beard Moves</h1>
      <div className="landingPageButtons">
        <div>
          <NavLink to="register" id="login-button" className="submit-button">
            Sign Up
          </NavLink>
          <br></br>
          <br></br>
          <NavLink to="login" id="login-button" className="submit-button">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
