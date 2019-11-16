import React from 'react';
import './App.css';
import { 
  Nav, 
  Login,  
  CardList,
  NewEventForm,
  Footer, 
  Routes,
  StoriesForm
} from './components'

function App() {
  return (
    <div className="App">
      <Nav />
      <Login /> 
      <CardList />
      <NewEventForm />
      <Footer />
      <StoriesForm />
      <Routes />
    </div>
  );
}

export default App;
