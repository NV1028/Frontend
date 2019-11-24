import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { UnstyledButton } from "@snowcoders/react-unstyled-button";
import "@snowcoders/react-unstyled-button/styles.css";
import { Link } from "react-router-dom"
import { deleteEvent, fetchSingleEvent } from "../actions";


const Cards = styled.div`
  background: #fff;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  display: inline-block;
  margin-bottom: 32px;
  margin-right: 30px;
  height: 280px;
  vertical-align: top;
  width: 460px;
  color: #1f2533;
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
  color: #ff80f7;
  font-size: 0.8rem;
  width: 180px;
  width: 85%;
  margin-top: 30px;
`;

const When = styled.div`
  font-size: 0.8em;
  margin-right: 20px;
  font-weigth: 600;
  width: 120px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const DateTime = styled.div`
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 3px;
`;

const Budget = styled.div`
  margin-right: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #51e47d
  margin-left: 5px;
`;

const BudgTit = styled.div``;

const BudgetStuff = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  font-weight: 600;
`;

const Icons = styled.div`
  width: 40px;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: 30px;
`;

const Card = props => {
  return (
    <Cards>
      <Divide>
        <Tittle>
          <h2>
            {props.event_name} {props.eventId}
          </h2>
        </Tittle>{" "}
        <When>
          <DateTime>Date: {props.event_date}</DateTime>
          <DateTime>Time: {props.event_time}</DateTime>
        </When>
      </Divide>
      <Description>
        <h4>{props.description}</h4>
      </Description>
      <Bottom>
        <Icons>
          <UnstyledButton>
            <Link to="/editevent">
            <FaEdit onClick={() => props.fetchSingleEvent(props.eventId, props.history)}/>
            </Link>
          </UnstyledButton>
          <UnstyledButton>
            <FaTrash onClick={() => props.deleteEvent(props.eventId, props.history)} />
          </UnstyledButton>
        </Icons>
        <BudgetStuff>
          <BudgTit>Budget: </BudgTit>
          <Budget>{props.budget}</Budget>
        </BudgetStuff>
      </Bottom>
    </Cards>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { deleteEvent, fetchSingleEvent })(Card);
