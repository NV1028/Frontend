import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "./actions";
import decode from "jwt-decode";
import { createGlobalStyle } from "styled-components";
import {Geolocation} from './components/Geolocation'
import {
  Nav,
  Login,
  Register,
  LandingPage,
  Footer,
  CardList,
  NewEventForm,
  PrivateRoute,
  EditEvent
} from "./components";

const GlobalStyles = createGlobalStyle`
  body {
      @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
      font-family: 'Open Sans', sans-serif;
  }
`;

function App(props) {
  console.log(props);
  useEffect(() => {
    if (props.userId === null && localStorage.getItem("token")) {
      console.log(null);
      const decoded = decode(localStorage.getItem("token"));
      props.setUser(decoded.subject);
    }
  }, []);

  return (
    <div className="App">
      <Geolocation />
      <GlobalStyles />
      <Nav />
      
      <Switch>
        <Route path="/register"  />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/geolocation" component={Geolocation} /> */}
        <PrivateRoute path="/events" component={CardList} />
        <PrivateRoute path="/newevent" component={NewEventForm} />
        <PrivateRoute path="/editevent" component={EditEvent} />

      </Switch>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  userId: state.login.userId,
  log: "helloWorld"
});

export default connect(mapStateToProps, { setUser })(App);
