import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  background: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 32px;
  margin-right: 30px;
  height: 250px;
  vertical-align: top;
  width: 460px;
`;

const Divide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  align-items: flex-end;
`;

const Tittle = styled.div`
  margin-top: 10px;
  color: #3dade2;
  font-size: 1rem;
  margin-left: 35px;
  height: 70px;
  font-weight: 400;
  width: 260;
  border-bottom: 1px solid #ebc492;
`;

const Description = styled.div`
  margin: 0 auto;
  color: grey;
  font-size: 0.8rem;
  width: 180px;
  width: 85%;
  margin-top: 30px;
`;

const When = styled.div`
  font-size: 0.8em;
  margin-right: 20px;
  font-weigth: 500;
  width: 120px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DateTime = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 3px;
`;

const Budget = styled.div`
  float: right;
  margin-right: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 40px;
`;


const Card = props => {
  return (
    <Cards>
      <Divide>
        <Tittle>
          <h2>{props.event_name}</h2>
        </Tittle>{" "}
        <When>
        <DateTime>Date: {props.event_date}</DateTime>
        <DateTime>Time: {props.event_time}</DateTime>
        </When>
      </Divide>
      <Description>
        <h4>
          Aristoteles era un filosofo muy respetado en sus tiempos. Discipulo de
          Platon o de Isocrates.
        </h4>
      </Description>
      <Budget>Budget: {props.budget}</Budget>
    </Cards>
  );
};

export default Card;
