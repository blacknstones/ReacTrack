import React, {useState} from 'react';
import Parcel from './Parcel';

export default function Filters({information}) {
    
    const [Parcels, setParcels] = useState(sortParcels());
    
    

    function sortParcels(key) {
        const sortedResults = information.sort((a, b) => (a[key] > b[key] ? 1 : -1));
        return sortedResults.map((item) => <Parcel key={item.id} data={item} />)
    }

    return (
        <div className="filters">
            <h1>display by:</h1>
            <button className="button" onClick={() => setParcels(sortParcels("parcel_id"))}>ID</button>
            <button className="button" onClick={() => setParcels(sortParcels("status"))}>Status</button>
            <button className="button" onClick={() => setParcels(sortParcels("sender"))}>Sender</button>
            <button className="button" onClick={() => setParcels(sortParcels("eta"))}>Estimated time of arrival</button>
            <div className="grid">{Parcels}</div>

        </div>
    );
}