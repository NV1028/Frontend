import './App.css';
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { setUser } from './actions'
import decode from 'jwt-decode'

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



function App( props ) {
    console.log(props)
useEffect( ()=> {
    if (props.userId === null && localStorage.getItem('token') ){
        console.log(null)
        const decoded = decode(localStorage.getItem("token"))
        props.setUser(decoded.subject)
    }
},[])  

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

const mapStateToProps = state => ({
    userId: state.login.userId
})

export default connect(mapStateToProps, { setUser})(App)
