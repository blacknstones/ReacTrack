import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Filters from './Filters';


export default function ParcelsPage({ status, information }) {

    
    

    return (
        <div className="parcels-page">
            <Header />
            <SearchBar/>
            
            {status === 1 ? <Filters information={information} /> : <p>No parcels to show.</p>}
            
        </div>
    );
}