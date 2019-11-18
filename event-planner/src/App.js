import './App.css';
import React, { useState } from "react";


import { 
  Nav, 
  Login,  
  CardList,
  NewEventForm,
  Footer, 
  Routes
} from './components'



function App() {


  return (
    <div className="App">
      <Nav />
     
      <CardList />
     
      <Footer />
    </div>
  );
}

export default App;
