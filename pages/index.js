// pages/index.js or any other page

import Navbar from '../components/Navbar';

function HomePage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                <Navbar />
                <h1>from data prime</h1>
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
