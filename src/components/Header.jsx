import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';


export default function Header() {


    return (
        <header className="header">
            <Link className="link logo" to="/">ReacTrack</Link>
            <NavBar />
        </header>
    );
}