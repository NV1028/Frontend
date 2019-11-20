import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigator = styled.div`
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`;

const Nava = styled.div`
  color: #2f3d56;
  font-weight: 500;
  font-size: 0.8rem;
  margin-right: 20px;
  margin-left: 80px;
  font-weight: 500;

  &:hover {
    background-color: fff;
    border-bottom: 1px solid #3dade2;
    color: #2f3d56;
  }
`;

const Nav = props => {
  return (
    <Navigator>
      <Link to={"/register"} style={{ textDecoration: "none" }}>
        {" "}
        <Nava>Sign Up</Nava>
      </Link>
      <Link to={"/events"} style={{ textDecoration: "none" }}>
        <Nava>Events </Nava>
      </Link>
      <Link to={"/newevent"} style={{ textDecoration: "none" }}>
        <Nava>Add New Event</Nava>
      </Link>
    </Navigator>
  );
};

export default Nav;
