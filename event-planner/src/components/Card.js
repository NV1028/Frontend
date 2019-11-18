import React from "react";
import styled from "styled-components";

const Cards= styled.div`
    background: #fff;
    box-shadow: 0 0 32px rgba(0,0,0,0.16);
    border-radius: 8px;
    display: inline-block;
    margin-bottom: 32px;
    margin-right: 30px;
    min-height: 350px;
    position: relative;
    vertical-align: top;
    width: 300px;
`





const Card = (props) => {
return (
    <Cards>
      <h2>{props.name}</h2>
      <img src= {props.image} alt ="image of char"/>
    </Cards>
  )
}

export default Card
