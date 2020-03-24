import React from 'react';
import logo from './logo.svg';
import {
	BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';

function App() {
  return (
    <div> 
    <Switch>
      <Route exact path="/port" component = { Homepage } />
      <Route exact path="/portfolio" component = { Portfolio } />
    </Switch>
  </div>
  );
}

export default App;
