import React from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';

export default function DetailPage({ information }) {
    const { match_id } = useParams();

    const matchedItem = information.filter((item) => item.parcel_id.match(match_id));

    if (!matchedItem) {
        return (
            <p>Parcel not found!</p>
        );
    }

    return (
        <div className="detail-page">
            <Header />
            <button>Go back home</button>
            <parcelDetail />

        </div>
        
    );

}