import React, { useState } from "react";

const NewEventForm = props => {
  let id = parseInt(localStorage.getItem("id"));

  const [makeEvent, setMakeEvent] = useState({
    event_name: "",
    description: "",
    event_date: "",
    event_time: "",
    budget: "",
    assigned_to_user: id
  });

  const [newUser, setUsers] = useState([
    // { event_name: "one", description: "two", event_date: "three", event_time: "four" , budget: "five"  }
    
  ]);

  const addNewUser = event => {
    setMakeEvent([...makeEvent, event]);
  };

  // const [user, setUser] = useState({ 
  //   event_name: "", 
  //   description: "", 
  //   event_date: "", 
  //   event_time: "" , 
  //   budget: ""  
  // });

  const submitForm = e => {
    e.preventDefault();
    // addNewUser(user);
    console.log(newUser);
    console.log(makeEvent);
  
  };

  const handleChange = e => {
    setMakeEvent({
      ...makeEvent,
      [e.target.name]: e.target.value
    });
    console.log(e.target);
  };
  return (
    <>
      <div className="oboardingFormOuter">
        <div className="landingText">
          <h4 id="landingText">Use the form below to create a new event!</h4>
        </div>
        <div className="landingFormInner">
          <form onSubmit={event => submitForm(event)} className="">
            <label className="formLabel">
              {" "}
              Name of Event:
              <br />
              <input
                type="text"
                name="event_name"
                // value=
                // value needs assignment with api post
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
                // value=
                // value needs assignment with api post
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
                // value=
                // value needs assignment with api post
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
                // value=
                // value needs assignment with api post
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
                // value=
                // value needs assignment with api post
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

const mapStateToProps = state => {
  return {};
};

export default NewEventForm;
