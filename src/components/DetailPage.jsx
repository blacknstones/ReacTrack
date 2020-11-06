import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from './Header';
import ParcelDetail from './ParcelDetail';

export default function DetailPage({ information }) {
    const { match_id } = useParams();

    {/* The filter function will return an array with one object */}
    const matchedItem = information.filter((item) => item.parcel_id.match(match_id))[0];

    if (!matchedItem) {
        return (
            <p>Parcel not found!</p>
        );
    }

    return (
        <div className="detail-page">
            <Header />
            <Link to={"/parcels"}>Go back</Link>
            <ParcelDetail matchedItem={ matchedItem }/>

        </div>
        
    );

}