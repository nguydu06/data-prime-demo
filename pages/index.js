// pages/index.js or any other page

import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function HomePage() {
    const [contentLoaded, setContentLoaded] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setContentLoaded(true);
        }, 3000); // 3 seconds delay or as per your preference
    }, []);


    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <Navbar />
                {contentLoaded ? (
                    <div className={`App ${fade ? 'fade-out' : ''}`}>
                        <h1>from data data prime</h1>
                    </div>
                ) : (
                    <div>Mimic processing data of data prime...</div>
                )}
            </div>

            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <span className="text-muted">Your Shared Footer Content Here.</span>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
