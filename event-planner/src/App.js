import React from 'react';
import './App.css';
import { 
  Nav, 
  Footer, 
  Login,
  Routes,  
} from './components'

function App() {
  return (
    <div className="App">
      <Nav />
      <Login /> 
      <Footer />
    </div>
  );
}

export default App;
