import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";




const Navigator= styled.div`
width: 100%;
height: 70px;
position: sticky;
top: 0;
display: flex;
justify-content: flex-start;
align-items: center;
background: #d5d8e0;
`


const Nava= styled.div`
    color: #2f3d56;
    font-weight: 400;
    font-size: 0.8rem;
    margin-right: 20px;
    margin-left: 30px;
    font-weight: 500;

    &:hover {
    background-color: transparent;
    border-bottom: 1px solid #2f3d56;
    color: #2f3d56;
    text-decoration: none
    }
`






const Nav = (props) => {
return (
    <Navigator>
   <Link to={"/register"}  style={{ textDecoration: 'none' }}> <Nava>SIGN UP</Nava></Link>
     <Link to={"/events"}   style={{ textDecoration: 'none' }}><Nava>EVENTS </Nava></Link>
      <Link to={"/newevent"}  style={{ textDecoration: 'none' }}><Nava>CREATE NEW EVENT</Nava></Link>
    </Navigator>
  )
}

export default Nav
