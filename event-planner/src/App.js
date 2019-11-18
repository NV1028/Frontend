import './App.css';
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { 
  Nav, 
  Login,  
  CardList,
  NewEventForm,
  Footer, 
  Routes
} from './components'


const GlobalStyles = createGlobalStyle`
  body {
      @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
      font-family: 'Open Sans', sans-serif;
  }
`



function App() {


  return (
  
      <div className="App">
         <GlobalStyles />
        <Nav />
        <Routes />
        <Footer />
        
      </div>
  
  );
}

export default App;
