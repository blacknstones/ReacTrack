// React core
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Data for testing
//import information from './fakeDB.json';

// Components
import HomePage from './components/templates/HomepPage';
import ParcelsPage from './components/templates/ParcelsPage';
import DetailPage from './components/templates/DetailPage';
import AboutPage from './components/templates/AboutPage';

// Styling
import './css/style.css';

export default function App() {

    const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    const [status, setStatus] = useState(0);
    const [information, setInformation] = useState([]);
    const getData = async () => {
        try {
            const response = await fetch(endpoint, { mode: "cors" });
            const data = await response.json();
            setInformation(data);
            setStatus(1);

        } catch (error) {
            console.log(error);
            setStatus(2);
        }
    };
    useEffect(() => {
        getData();
    }, []); 

  // Add this line for testing with FakeDB
  // const status = 1;

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <HomePage information={information} />
          </Route>
          <Route exact path="/parcels">
            <ParcelsPage status={status} information={information}/>
          </Route>
          <Route exact path="/parcels/:match_id">
            <DetailPage information={information}/>
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>


  );
}


