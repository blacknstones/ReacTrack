// React core
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import NavBar from '../molecules/NavBar';

export default function Header() {

    return (
        <header className="header">
            <Link className="link logo" to="/">ReacTrack</Link>
            <NavBar />
        </header>
    );
}