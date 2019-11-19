import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";


const Foot= styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    background: #66b3ff;
    padding: 33px 21px 40px;
    text-align: center;
    font-size: 0.9rem;
    font-weight: 400;
    height: 130px;
    margin-top: 100px;
`


const Order= styled.div`
display: flex;
flex-direction: column;
`



const Foota= styled.div`
color: #2f3d56;
font-weight: 400;
font-size: 0.8rem;
margin-right: 20px;
margin-left: 30px;
font-weight: 600;
line-height: 1.7rem;

&:hover {
background-color: fff;
border-bottom: 1px solid #68b8ff;
color: #2f3d56;

}
`


const Footer = (props) => {
return (
    <Foot>
        <Order>
        <a href="index.html"><Foota>Home</Foota></a>
        <a href="#"><Foota>Team</Foota></a>
        <a href="#"><Foota>Sign In</Foota></a>
      </Order>
  
      <Order>
        <a href="#"><Foota>Blog</Foota></a>
        <a href="#"><Foota>Careers</Foota></a>
        <a href="#"><Foota>Press</Foota></a>
      </Order>
  
      <Order>
        <a href="#"><Foota>Contact Us</Foota></a>
          <a href="#"><Foota>support@evenplanner.com</Foota></a>
          <a href="#"><Foota>press@evenplanner.com</Foota></a>
        </Order>
      
  <Order>
        <a href="#"><Foota>Media</Foota></a>
    
          <a href="#">
            <Foota>Twitter</Foota>
          </a>
          <a href="#">
            <Foota>Instagram</Foota>
          </a>
    
  </Order>
    </Foot>
  )
}

export default Footer
