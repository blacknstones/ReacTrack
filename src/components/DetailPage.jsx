import React from 'react';
import { useParams, Link } from 'react-router-dom';

import Header from './Header';
import ParcelDetail from './ParcelDetail';

export default function DetailPage({ information }) {
    {/* Access current Route */}
    const { match_id } = useParams();

    {/* Check if the match_id matchs the format of parcel_id */}
    const format = RegExp(/^\d{4}$/);
    const isValid = format.test(match_id);

    {/* for testing */}
    console.log(match_id);
    console.log(isValid);

    {/* The filter function will return an array with one object, use [0] to access it */ }
    const matchedItem = information.filter((item) => item.parcel_id.match(match_id))[0];

    return (
        <div className="detail-page">
            <Header />
            <Link className="link go-back" to={"/parcels"}>Go back</Link>
            {isValid && matchedItem ? <ParcelDetail matchedItem={matchedItem} /> : <p>Parcel not found!</p>}
        </div>

    );

}