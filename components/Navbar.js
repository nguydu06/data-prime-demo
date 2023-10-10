// components/Navbar.js

import React, { useState } from 'react';

function Navbar() {
    const [fade, setFade] = useState(false);

    const handleMouseOver = () => {
        const preloadLink = document.createElement("link");
        preloadLink.href = "http://localhost:4000";
        preloadLink.rel = "prefetch";
        document.head.appendChild(preloadLink);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setFade(true);
        setTimeout(() => {
            window.location.href = "http://localhost:4000";
        }, 500);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${fade ? 'fade-out' : ''}`}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Your Brand</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="http://localhost:3000">Home</a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="http://localhost:4000"
                                onMouseOver={handleMouseOver}
                                onClick={handleClick}
                            >
                                Go to Data Prime
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </nav>
    );
}

export default Navbar;
