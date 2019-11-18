import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";




const Navigator= styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: #666666;
    padding: 66px 42px 80px;
    text-align: center;
    color: #ffc61a;

`


const Footer = (props) => {
return (
    <Navigator>
      <h2>Cosa 1</h2>
      <h2>Cosa 2</h2>
      <h2>Cosa 3</h2>
      <h2>Cosa 4</h2>
    </Navigator>
  )
}

export default Footer
