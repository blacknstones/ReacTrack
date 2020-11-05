// React core
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

// Components
import Header from "../components/Header";


export default function HomePage({information}) {
    


    return (
        <div className="home-page">
            <Header />

            <Link className="button" to="/parcels">
                All Parcels
            </Link>
            <p>Your parcels will be displayed here.</p>



        </div>
    );

}

