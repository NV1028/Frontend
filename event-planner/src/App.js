import './App.css';
import React from "react";


import { 
  Nav, 
  Login,  
  Footer, 
  Routes
} from './components'



function App() {


  return (
    <div className="App">
      <Nav />
      <Login />
      <Footer />
      <Routes />
    </div>
  );
}

export default App;
