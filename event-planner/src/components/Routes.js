import React from "react";
import { Route } from "react-router-dom"
import { Register } from "/"
import NewEventForm from "./NewEventForm"
import CardList from "./CardList"

const Routes = (props) => {
return (
  <div>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/newevent" component={NewEventForm}/>
      <Route exact path="/events" component={CardList}/>
  </div>
  )
}

export default Routes
