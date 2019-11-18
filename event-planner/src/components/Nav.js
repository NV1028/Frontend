import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";




const Navigator= styled.div`
border-bottom: 1px solid rgb(172, 197, 160);
width: 100%;
height: 70px;
position: sticky;
top: 0;
background: white;
display: flex;
justify-content: flex-start;
align-items: center;
background: #666666;
`


const Nava= styled.div`
    color: lightgreen;
    font-weight: 400;
    font-size: 0.9rem;
    margin-right: 20px;
    margin-left: 30px;
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
