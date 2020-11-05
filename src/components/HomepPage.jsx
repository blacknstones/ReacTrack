// React core
import React, { useState, useEffect } from 'react';

// Components
import Header from "../components/Header";

export default function HomePage() {
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
        <div className="home-page">
            <Header />
            <h1>Home page</h1>
            <button onClick={getData}>All Packages</button>
        </div>
    );

}

