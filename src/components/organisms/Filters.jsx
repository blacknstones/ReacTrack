// React core
import React, { useState } from 'react';

// Components
import ParcelCard from '../molecules/ParcelCard';

export default function Filters({ information }) {

    const [Parcels, setParcels] = useState(sortParcels());

    // Sort parcels by input key
    function sortParcels(key) {
        const sortedResults = information.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        return sortedResults.map((item) => <ParcelCard key={item.id} data={item} />)
    }

    return (
        <div className="filters">
            <h1 className="filter-info">display by:</h1>
            <div className="filter-buttons">
                <button className="button" onClick={() => setParcels(sortParcels("parcel_id"))}>ID</button>
                <button className="button" onClick={() => setParcels(sortParcels("status"))}>Status</button>
                <button className="button" onClick={() => setParcels(sortParcels("sender"))}>Sender</button>
                <button className="button" onClick={() => setParcels(sortParcels("eta"))}>Estimated time of arrival</button>
            </div>

            <div className="grid parcels">{Parcels}</div>

        </div>
    );
}