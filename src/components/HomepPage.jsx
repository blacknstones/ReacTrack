// React core
import React, { useState, useEffect } from 'react';

// Components
import Header from "../components/Header";
import Parcel from "../components/Parcel";

export default function HomePage() {
    const [status, setStatus] = useState(0);
    const [information, setInformation] = useState([]);
    const [showParcels, setShowParcels] = useState(false);

    const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
    const Parcels = information.map((item)=> {
        return <Parcel key={item.id} data={item}/>
    })

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
            <button onClick={() => setShowParcels(!showParcels)}>All Packages</button>
    <div>{showParcels && Parcels}</div>
            
        </div>
    );

}

