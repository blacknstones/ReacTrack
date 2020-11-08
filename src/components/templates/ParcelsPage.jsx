// React core
import React from 'react';

// Components
import Header from '../organisms/Header';
import SearchBar from '../molecules/SearchBar';
import Filters from '../organisms/Filters';

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