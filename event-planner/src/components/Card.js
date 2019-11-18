import React from "react";
import styled from "styled-components";

const Cards= styled.div`
    background: #fff;
    box-shadow: 0 0 32px rgba(0,0,0,0.16);
    border-radius: 8px;
    display: inline-block;
    margin-bottom: 32px;
    margin-right: 30px;
    height: 250px;
    vertical-align: top;
    width: 500px;
`

const Tittle= styled.div`
    margin-top: 10px;
    color: #ffc61a;
`

const Description= styled.div`
    padding-right: 20px;
    padding-left: 20px;
    color: grey;
`



const Card = (props) => {
return (
    <Cards>
      <Tittle><h2>{props.event_name}</h2></Tittle>
     <Description>
        <h4>Aristoteles era un filosofo muy respetado en sus tiempos. 
          Discipulo de Platon o de Isocrates.
        
        </h4>
     </Description>
      <h3>{props.budget}</h3>
      <h3>{props.event_date}</h3>
      <h3>{props.event_time}</h3>
    </Cards>
  )
}

export default Card
