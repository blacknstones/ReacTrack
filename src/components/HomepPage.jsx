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
            <div className="main-content">
                <SearchBar />
                <Link className="link button all-parcels" to="/parcels">
                    All Parcels
                </Link>
                <p className="display-info">Your parcels will be displayed here.</p>
            </div>

        </div>
    );

}

