// React core
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components



// Other imports
import './css/style.css';
import HomePage from './components/HomepPage';

export default function App() {

  


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}


