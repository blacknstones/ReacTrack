import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filters from './Filters';


export default function ParcelsPage({ status, information }) {




    return (
        <div className="parcels-page">
            <Header />
            <div className="main-content">
                <SearchBar />
                {status === 1 ? <Filters information={information} /> : <p className="not-found">No parcels to show.</p>}

            </div>


        </div>
    );
}