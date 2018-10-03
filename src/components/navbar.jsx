import React, { Component } from 'react';

// Stateless Functional Component

const NavBar = ({ numberCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">
                    {numberCounters}
                </span>
            </a>
        </nav>
    );
};
 
export default NavBar;