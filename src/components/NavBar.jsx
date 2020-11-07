import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <Link className="link nav-link" to="/">Home</Link>
            <Link className="link nav-link" to="/parcels">All Parcels</Link>
            <Link className="link nav-link" to="/about">About</Link>

            <div className="menu-icon" onClick={handleClick}>
                {/* FontAwesome Icon */}
                <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
        </nav>
    );

}