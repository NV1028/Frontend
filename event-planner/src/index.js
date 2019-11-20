import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer as loginReducer } from "./reducers/login";
import { reducer as registerReducer } from "./reducers/register";


const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer 
  })

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Router>
        <Provider store={store}>    
         <App />  
        </Provider>
    </Router>, 
    document.getElementById('root'));

