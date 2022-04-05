import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

import { NavLink } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">JungleSafari</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                            </li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant='secondary'>
                                   
                                        Mode
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item >
                                            <NavLink to="/admin" style={{ textDecoration: "none", color: "black" }}> <h6>Admin</h6></NavLink>

                                        </Dropdown.Item>
                                        <Dropdown.Item >
                                            <NavLink to="/user" style={{ textDecoration: "none", color: "black" }}> <h6>user</h6></NavLink>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>




                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </>
    )
}
