import React, { useState, useEffect } from "react";
import Card from "./Card";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchEvents } from "../actions";

const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  margin-top: 50px;
`;

const CardList = props => {
  useEffect(() => {
    props.fetchEvents(props.login.userId);
  }, []);

  return (
    <CardHolder>
      {props.events.eventsList &&
        props.events.eventsList.map(info => (
          <Card
            event_name={info.event_name}
            description={info.description}
            budget={info.budget}
            event_date={info.event_date}
            event_time={info.event_time}
          />
        ))}
    </CardHolder>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    ...state
  };
}

export default connect(mapStateToProps, { fetchEvents })(CardList);
