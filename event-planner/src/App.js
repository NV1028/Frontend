import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom"


import { 
  Nav, 
  Login,
  Register,
  LandingPage,  
  Footer, 
  Routes
} from './components'



function App() {


  return (
    <div className="App">
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={LandingPage} />
    </Switch>
    </div>
  );
}

export default App;
