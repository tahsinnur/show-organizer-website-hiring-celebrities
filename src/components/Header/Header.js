import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{fontFamily:"'Rajdhani', sans-serif"}}>
            <nav style={{backgroundColor:'#a90455'}} className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand text-white
                fw-bold fs-2" href="/home">SHOWMAKER</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white fs-4" aria-current="page" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white fs-4" aria-current="page" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white fs-4" aria-current="page" href="/contact">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div className="container mt-2">
                <h3 className="text-uppercase">We can make your show awesome</h3>
            </div>
        </div>
    );
};

export default Header;