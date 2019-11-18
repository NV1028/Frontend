import React from "react";
import { Route } from "react-router-dom"
import { Register } from "/"
import NewEventForm from "./NewEventForm"

const Routes = (props) => {
return (
  <div>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/newevent" component={NewEventForm}/>
  </div>
  )
}

export default Routes
