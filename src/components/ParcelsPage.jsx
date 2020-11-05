import React from 'react';
import Header from './Header';
import Parcel from './Parcel';


export default function ParcelsPage({ information }) {
    const Parcels = information.map((item) => {
        return <Parcel key={item.id} data={item} />
    });

    return (
        <div className="parcels-page">
            <Header />
            <div>{Parcels}</div>
        </div>
    );
}