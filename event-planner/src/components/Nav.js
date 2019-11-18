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






const Nav = (props) => {
return (
    <Navigator>
     <Nava> <h3>SIGN UP</h3></Nava>
     <Nava> <h3>EVENTS</h3></Nava>
     <Nava> <h3>CREATE NEW EVENT</h3></Nava>
    </Navigator>
  )
}

export default Nav
