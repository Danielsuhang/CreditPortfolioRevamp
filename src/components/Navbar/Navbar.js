import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar () {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="navbar-brand" href="#">Credit Smarter</div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;