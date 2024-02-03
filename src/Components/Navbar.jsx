// Navbar.js
import React from 'react';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbarcolor">
        <div className='container'>
            <a className="navbar-brand" to="/">
                Khadija-Portfolio
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href = "#" className="nav-a" to="/about">
                            Home
                        </a>
                    </li>
                        <li className="nav-item">
                            <a href="#" className="nav-a" to="/about">
                                Service
                            </a>
                        </li>
                    <li className="nav-item">
                            <a href="#" className="nav-a" to="/blog">
                            About Us
                        </a>
                    </li>
                    <li className="nav-item">
                            <a href="#" className="nav-a" to="/services">
                        Portfolio
                        </a>
                    </li>
                        <li className="nav-item">
                            <a href="#" className="nav-a" to="/services">
                                Pages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-a" to="/services">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-a" to="/services">
                                Contact Us
                            </a>
                        </li>
                   
                    <li className="nav-item nav-button">
                            <a href="#" className="nav-a" to="/contact">
                            Get Started
                        </a>
                    </li>
                </ul>
            
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
