import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom"


import { 
  Nav, 
  Login,
  Register,
  LandingPage,  
  Footer, 
  Routes,
  CardList,
  NewEventForm
} from './components'



function App() {


  return (
    <div className="App">
      <Nav/>
       <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/events" component={CardList} />
        <Route exact path="/newevent" component={NewEventForm}/>
    </Switch>
    </div>
  );
}

export default App;
