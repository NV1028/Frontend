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
justify-content: space-between;
align-items: center;
background: #666666;
`


const Nava= styled.div`
    display: flex;
    justify-content: space-between;
    display: flex;
    margin: 0 auto;
    color: #ffc61a;
`






const Footer = (props) => {
return (
    <Navigator>
     <Nava> <Link to={"/register"}><h3>SIGN UP</h3></Link></Nava>
     <Nava> <Link to={"/events"}><h3>EVENTS</h3></Link></Nava>
     <Nava> <Link to={"/newevent"}><h3>CREATE NEW EVENT</h3></Link></Nava>
    </Navigator>
  )
}

export default Footer
