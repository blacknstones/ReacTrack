import React, { useState } from 'react';

export default function Header() {
    const [query, setQuery] = useState("");
    return (
        <header className="header">
            <h1>ReacTrack</h1>

            <div className="search-bar">
                <input placeholder="Search with parcel ID" value={query} onChange={(event) => setQuery(event.target.value)}/>
                <button>Search</button>  
            </div>
        </header>
    );
}