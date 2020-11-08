// React core
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Components
import Header from '../organisms/Header';
import ParcelDetail from '../molecules/ParcelDetail';

export default function DetailPage({ information }) {

    // Access current Route
    const { match_id } = useParams();

    // Check if the match_id matchs the format of parcel_id
    const format = RegExp(/^\d{4}$/);
    const isValid = format.test(match_id);

    // for testing 
    console.log(match_id);
    console.log(isValid);

    // The filter function will return an array with one object, use [0] to access it 
    const matchedItem = information.filter((item) => item.parcel_id.match(match_id))[0];

    return (
        <section className="detail-page">
            <Header />
            <div className="main-content">
                <div className="go-back">
                    <Link className="button link" to={"/parcels"}>Go back</Link>
                </div>
                <div className="detail-content">
                    {isValid && matchedItem ? <ParcelDetail matchedItem={matchedItem} /> : <p className="not-found">Parcel not found!</p>}
                </div>
            </div>

        </section>

    );

}