// React core
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Header from "../components/Header";
import SearchBar from './SearchBar';


export default function HomePage() {

    return (
        <div className="home-page">
            <Header />
            <SearchBar />

            <Link className="button" to="/parcels">
                All Parcels
            </Link>
            <p>Your parcels will be displayed here.</p>
        </div>
    );

}

