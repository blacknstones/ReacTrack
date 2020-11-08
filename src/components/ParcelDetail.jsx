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
        <article className="parcel-detail parcel-card">


            <span className="prompt">ID</span><span>{parcel_id}</span>
            <br />
            <span className="prompt">Sender</span><span>{sender}</span>
            <br />

            <span className="prompt">Status</span><span>{status}</span>
            <br />
            <span className="prompt">Estimated time of arrival</span><span>{eta}</span>
            <br />
            <span className="prompt">Require verification</span><span>{verification_required ? `yes` : `no`}</span>
            <br />
            <span className="prompt">Location</span><span>{location_name}</span>
            <br />
            <span className="prompt">Notes</span><span>{notes}</span>
            <br />
            <span className="prompt">Last updated</span><span>{last_updated}</span>
            <br />

        </article>
    );


}