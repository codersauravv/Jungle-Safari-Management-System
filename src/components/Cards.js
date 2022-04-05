import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import package1 from "./images/package1.jpg";
import package2 from "./images/package2.png";
import package3 from "./images/package3.jpg";
import { NavLink } from 'react-router-dom';
export default function Cards() {
    return (
        <>

            <div className="row">
                <div className="col">
                    <div className="container">

                        <div className="card-body">
                            <img src={package1} className="d-block w-100" alt="..." width="50" height="250" />
                            <h1 style={{color: "chocolate"}}>Summer Offer!</h1>
                            <h1 className="card-title pricing-card-title">
                                <h3 style={{display: "inline"}}>3Nights</h3>
                                <h4 className="text-muted fw-light" style={{display: "inline"}}> 7days</h4>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">

                                <li>Free Food</li>
                                <li>Cottages</li>
                                <li>Free Internet</li>
                                <li>Help center access</li>
                            </ul>
                            <NavLink type="button" className="w-100 btn btn-lg btn-outline-primary" to="/login">Buy</NavLink>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="container">

                        <div className="card-body">
                            <img src={package2} className="d-block w-100" alt="..." width="50" height="250" />
                            <h1 style={{color: "chocolate"}}>Diwali Offer!</h1>
                            <h1 className="card-title pricing-card-title">
                                <h3 style={{display: "inline"}}>3Nights</h3>
                                <h4 className="text-muted fw-light" style={{display: "inline"}}> 7days</h4>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Free Food</li>
                                <li>Cottages</li>
                                <li>Free Internet</li>
                                <li>Help center access</li>
                            </ul>
                            <NavLink type="button" className="w-100 btn btn-lg btn-outline-primary" to="/login">Buy</NavLink>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="container">

                        <div className="card-body">
                            <img src={package3} className="d-block w-100" alt="..." width="50" height="250" />
                            <h1 style={{color: "chocolate"}}>Couples Offer!</h1>
                            <h1 className="card-title pricing-card-title">
                                <h3 style={{display: "inline"}}>3Nights</h3>
                                <h4 className="text-muted fw-light" style={{display: "inline"}}> 7days</h4>
                            </h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Free Food</li>
                                <li>Cottages</li>
                                <li>Free Internet</li>
                                <li>Help center access</li>
                            </ul>
                            <NavLink type="button" className="w-100 btn btn-lg btn-outline-primary" to="/login">Buy</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
