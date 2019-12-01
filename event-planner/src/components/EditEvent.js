import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSingleEvent, editEvent } from "../actions/";

const EditEvent = props => {
  const [editValues, setEditValues]   = useState({
    event_name: props.fetchASingleEvent.singleEvent.event_name,
    description: props.fetchASingleEvent.singleEvent.description,
    event_date: props.fetchASingleEvent.singleEvent.date,
    event_time: props.fetchASingleEvent.event_time,
    budget: props.fetchASingleEvent.budget,
    assigned_to_user: props.fetchASingleEvent.singleEvent.assigned_to_user
  });
  useEffect(() => {

setEditValues({
  event_name: props.fetchASingleEvent.singleEvent.event_name,
  description: props.fetchASingleEvent.singleEvent.description,
  event_date: props.fetchASingleEvent.singleEvent.event_date,
  event_time: props.fetchASingleEvent.singleEvent.event_time,
  budget: props.fetchASingleEvent.singleEvent.budget,
  assigned_to_user: props.fetchASingleEvent.singleEvent.assigned_to_user})

  }, [props.fetchASingleEvent]);

  const handleChange = e => {
    // console.log(e);
    setEditValues({
      ...editValues,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const eventValues = { ...editValues};
    console.log(eventValues);
    if(eventValues.event_name === ""){
      return alert("Please enter an event name");
    };
    if(eventValues.description === ""){
      return alert("Please enter a description");
    };
    if(eventValues.event_date === ""){
      return alert("Please enter a date");
    };
    if(eventValues.event_time === ""){
      return alert("Please enter a time");
    };
    if(eventValues.budget === ""){
      return alert("Please enter a budget");
    };
    props.editEvent(eventValues, props.fetchASingleEvent.singleEvent.id, props.history);


  };

  return (
    <>
      <div className="oboardingFormOuter">
        <div className="landingText">
          <h4 id="landingText">Edit Event</h4>
        </div>
        <div className="landingFormInner">
          <form onSubmit={handleSubmit}>
            <label className="formLabel">
              {" "}
              Name of Event:
              <br />
              <input
                type="text"
                name="event_name"
                placeholder="Stakeholders Meeting"
                value={editValues.event_name}
                onChange={handleChange}
                className="formInput"
              />
            </label>
            <br />
            <br />
            <label className="formLabel">
              Event Description:
              <br />
              <input
                type="text"
                name="description"
                placeholder="Financial Advisory"
                value={editValues.description}
                onChange={handleChange}
                className="formInput"
              />
            </label>
            <br />
            <br />
            <label className="formLabel">
              {" "}
              Event Date:
              <br />
              <input
                type="text"
                name="event_date"
                placeholder="MM-DD-YY"
                value={editValues.event_date}
                onChange={handleChange}
                className="formInput"
              />
              <br />
              <br />
            </label>
            <label className="formLabel">
              {" "}
              Time of event:
              <br />
              <input
                type="text"
                name="event_time"
                placeholder="HH:MM AM/PM"
                value={editValues.event_time}
                onChange={handleChange}
                className="formInput"
              />
            </label>
            <br />
            <br />
            <label className="formLabel">
              Budget:
              <br />
              <input
                type="text"
                name="budget"
                placeholder="$$$"
                value={editValues.budget}
                onChange={handleChange}
                className="formInput"
              />
            </label>
            <br />
            <button id="login-button" className="submit-button" type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps, { fetchSingleEvent, editEvent  })(EditEvent);
