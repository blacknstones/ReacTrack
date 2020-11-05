// React core
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components



// Other imports
import './css/style.css';
import HomePage from './components/HomepPage';
import ParcelsPage from './components/ParcelsPage';

export default function App() {

  const [status, setStatus] = useState(0);
    const [information, setInformation] = useState([]);

    const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    

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

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomePage information={information} status={status}/>
          </Route>
          <Route path="/parcels">
            <ParcelsPage information={information} status={status}/>
          </Route>
        </Switch>
      </div>
    </Router>


  );
}


