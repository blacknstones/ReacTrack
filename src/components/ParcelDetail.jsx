import React from 'react';

export default function ParcelDetail({ matchedItem }) {
    const {
        status,
        eta,
        parcel_id,
        sender,
        verification_required,
        location_name,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_status_ok,
        notes,
        last_updated
    } = matchedItem;


    return (
        <article className="parcel-detail">
            <p>ID: {parcel_id}</p>
            <p>Sender: {sender}</p>
            <p>Status:{status}</p>
            <p>Estimated time of arrival: {eta}</p>
            <p>Require verification : {verification_required ? `yes` : `no`} </p>
            <p>Location: {location_name}</p>
            <p>Notes: {notes}</p>
            <p>Last updated: {last_updated}</p>

        </article>
    );


}