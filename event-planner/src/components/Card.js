import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  background: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 32px;
  margin-right: 30px;
  height: 500px;
  vertical-align: top;
  width: 500px;
`;

const Divide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Tittle = styled.div`
  margin-top: 10px;
  color: #3dade2;
  font-size: 0.8rem;
  display: flex;
  flex-direction: flex-start;
  margin-left: 20px;
`;

const Description = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  color: grey;
  font-size: 0.7rem;
  border-top: 1px solid black;
  width: 180px;
  margin-left: 20px;
  margin-bottom: 15px;
`;

const Rest = styled.div`
  font-size: 0.8em;
  margin-right: 60px;
  font-weigth: 500;
  display: flex;
  flex-direction: row;
  width: 160px;
  justify-content: space-between;
`;

const Rei = styled.div`
  display: flex;
  align-items: center;
`;

const Card = props => {
  return (
    <Cards>
      <Divide>
        <Tittle>
          <h2>{props.event_name}</h2>
        </Tittle>{" "}
        <Rest>
          <Rei>{props.budget}</Rei>
          <Rei>{props.event_date}</Rei>
          <Rei>{props.event_time}</Rei>
        </Rest>
      </Divide>
      <Description>
        <h4>
          Aristoteles era un filosofo muy respetado en sus tiempos. Discipulo de
          Platon o de Isocrates.
        </h4>
      </Description>
      <img src={props.image} alt="" />
    </Cards>
  );
};

export default Card;
