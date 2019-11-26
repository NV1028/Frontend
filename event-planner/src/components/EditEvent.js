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

    console.log(`-----console.log of singleEvent Object-----`)
    console.log(props.fetchASingleEvent.singleEvent)
    console.log(`-----console.log of singleEvent Object-----`)
setEditValues(
  props.fetchASingleEvent.singleEvent
)
console.log(`-----console.log of editValues Object-----`)
console.log(editValues)
console.log(`-----console.log of editValues Object-----`)

  }, []);

  const handleChange = e => {
    console.log(e);
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
                onChange={event => handleChange(event)}
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
                onChange={event => handleChange(event)}
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
                onChange={event => handleChange(event)}
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
                onChange={event => handleChange(event)}
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
                onChange={event => handleChange(event)}
                className="formInput"
              />
            </label>
            <br />
            <button id="login-button" className="submit-button" type="submit">
              {/* button above needs onClick={} */}
              Submit
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

export default connect(mapStateToProps, { fetchSingleEvent, EditEvent  })(EditEvent);
