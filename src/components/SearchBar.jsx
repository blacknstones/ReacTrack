import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar() {
    const [query, setQuery] = useState("");



    return (
        <div className="search-bar">
            <input placeholder="Search with parcel ID" value={query} onChange={(event) => setQuery(event.target.value)} />
            <Link className="search-link" to={`/parcels/${query}`}>Search</Link>
        </div>
    );
}