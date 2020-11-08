import React from 'react';
import { Link } from 'react-router-dom';

export default function Parcel({ data }) {
    const {
        status,
        eta,
        parcel_id,
        sender
    } = data;

    return (
        <article className="parcel">
            <Link className="link" to={`/parcels/${parcel_id}`}>    
                    <span>Sender: </span><span>{sender}</span>
                    <p>ID: {parcel_id}</p>
                    <p>Status:{status}</p>
                    <p>estimated time of arrival: {eta}</p>
                
            </Link>
        </article>
    );

}