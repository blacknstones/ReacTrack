import React from 'react';
import { Link } from 'react-router-dom';

export default function ParcelCard({ data }) {
    const {
        status,
        eta,
        parcel_id,
        sender
    } = data;

    return (
        <article className="parcel-card">
            <Link className="link" to={`/parcels/${parcel_id}`}>
                <span className="prompt">Sender</span><span>{sender}</span>
                <br />
                <span className="prompt">ID</span><span>{parcel_id}</span>
                <br />
                <span className="prompt">Status</span><span>{status}</span>
                <br />
                <span className="prompt">Estimated time of arrival</span><span>{eta}</span>
            </Link>
        </article>
    );

}