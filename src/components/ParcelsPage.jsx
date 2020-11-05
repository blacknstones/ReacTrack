import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filters from './Filters';


export default function ParcelsPage({ information }) {

    return (
        <div className="parcels-page">
            <Header />
            <SearchBar/>
            <Filters information={information} />
        </div>
    );
}