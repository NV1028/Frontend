import React, { useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchEvents, fetchUser } from "../actions";
import { Link } from "react-router-dom"
const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const CardList = props => {
  useEffect(() => {
    // props.fetchUser(props.login.userId);
    props.fetchEvents(props.login.userId);
  }, [props.deleteEvent]);

  return (
    <div> 
      <div>{props.login.loginMessage}</div> 
    <CardHolder>
      {props.events.eventsList &&
        props.events.eventsList.map(info => (
          <Card
            key={info.id}
            eventId={info.id}
            event_name={info.event_name}
            description={info.description}
            budget={info.budget}
            event_date={info.event_date}
            event_time={info.event_time}
          />
        ))}
    </CardHolder>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { fetchEvents, fetchUser })(CardList);
