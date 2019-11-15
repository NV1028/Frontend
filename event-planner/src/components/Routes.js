import React from "react";
import { Route } from "react-router-dom"
import { Register } from "/"
const Routes = (props) => {
return (
  <div>
      <Route exact path="/register" component={Register}/>
  </div>
  )
}

export default Routes
