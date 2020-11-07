// React core
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Data
import information from './fakeDB.json';

// Components
import HomePage from './components/HomepPage';
import ParcelsPage from './components/ParcelsPage';

import DetailPage from './components/DetailPage';

// Other imports
import './css/style.css';


export default function App() {

  {/* Note: The following fetch functionality has been tested. */ }
  {/* In order to not accidentally break the sever, the data to be used is saved in a local file. */ }

  {/* 
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
  */}

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" >
            <HomePage information={information}/>
          </Route>
          <Route exact path="/parcels">
            <ParcelsPage information={information}/>
          </Route>
          <Route exact path="/parcels/:match_id">
            <DetailPage information={information}/>
          </Route>
        </Switch>
      </div>
    </Router>


  );
}


