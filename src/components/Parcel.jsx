import React from 'react';

export default function Parcel({ data }) {
    const {
        id,
        status,
        eta,
        parcel_id,
        sender,
        verification_required,
        location_id,
        location_name,
        location_coordinate_latitude,
        location_coordinate_longitude,
        location_status_ok,
        notes,
        last_updated
    } = data;

    return (
        <article className="parcel">
            <p>Sender: {sender}</p>
            <p>ID: {parcel_id}</p>
            <p>Status:{status}</p>
            <p>Notes: {notes}</p>
        </article>
    )

}