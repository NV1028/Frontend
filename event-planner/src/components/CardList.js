import React, {useState, useEffect} from "react";
import Card from "./Card";
import styled from "styled-components";
import { connect } from "react-redux"
import { fetchEvents } from "../actions"


const CardHolder = styled.div`
display: flex;
flex-direction: row;
width: 1200px;
flex-wrap: wrap;
margin: 0 auto;
justify-content: center;
margin-top: 50px;


`



const CardList = (props) => {

  useEffect(() => {
    props.fetchEvents(props.login.userId)
    console.log("events")
    console.log(props.fetchEvents.eventList)
},[])

return (
    <CardHolder>
      
{/* {props.props.fetchEvents.eventList.map(info => (
           <Card event_name={info.name} description={info.species} budget={info.status} event_date={info.gender} event_time={info.id}  />
        ))} */}
    </CardHolder>
  )
}

function mapStateToProps(state) {
  return {
    ...state
  };
}



export default connect(
  mapStateToProps,
  { fetchEvents }
)(CardList);

