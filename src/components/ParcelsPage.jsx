import React from 'react';
import Header from './Header';
import Parcel from './Parcel';


export default function ParcelsPage({information, status}) {
    const Parcels = information.map((item) => {
        return <Parcel key={item.id} data={item} />
    });
   


    return (
        <div className="parcels-page">
            <Header />
                {status === 0 ? <p>Loading...</p> : null}
                {status === 1 ? <div>{Parcels}</div> : <p>No parcels to show.</p>}
                {status === 2 ? <p>Sorry we cannot find data</p> : null}
        </div>
    );
}