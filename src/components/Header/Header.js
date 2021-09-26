import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav style={{backgroundColor:'#a90455'}} className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand text-white
                fw-bold fs-2" href="/home">SHOWMAKER</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu-item">
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
                <div class="d-flex">
                    <input className="me-2 px-3 rounded border-0" type="search" placeholder="Search Artist" aria-label="Search"/>
                    <button className="btn bg-dark text-white" type="submit">Search</button>
                </div>
                </div>
            </div>
            </nav>
            <div className="container mt-2">
                <h3 className="text-uppercase fw-bold">We can make your show awesome</h3>
                <h1 className="text-uppercase fw-bold">Hire Now !!!</h1>
                <h2 className="text-uppercase">Total Budget: <span className="fs-1">300 Million</span></h2>
            </div>
        </div>
    );
};

export default Header;