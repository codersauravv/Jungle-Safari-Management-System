import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import kirtika from "./images/kirtika.jpg";
import saurav from "./images/saurav.jpg";
import mohit from "./images/mohit.jpeg";
export default function Footer() {

    const kirtika_logo_css = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%"
    }
    const saurav_logo_css = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%"
    }
    const mohit_logo_css = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "50%"
    }
    return (
        <>
            <footer>
                <section className="mb-5">
                    <div className="row d-flex justify-content-center">
                        <div className="row">
                            <div className="col">
                                <div className="container">

                                    <img src={kirtika} className="center"
                                        style={kirtika_logo_css} width="100"
                                        height="100" alt="Avatar" />
                                    <h3 style={{ textAlign: "center" }}>kirtika Singh</h3>
                                    <p>Lorem ipsum, dolo r sit amet consectetur adipisicing elit. Sed nihil esse pariatur itaque, accusantium
                                        adipisci. Sed, blanditiis sint nesciunt placeat aperiam in dolor pariatur, officia animi rem quidem
                                        ullam. Amet?</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="container">
                                    <img src={saurav} className="center"
                                        style={saurav_logo_css} width="100"
                                        height="100" alt="Avatar" />
                                    <h3 style={{ textAlign: "center" }}>Saurav Mahapure</h3>
                                    <p>Lorem ipsum, dolo r sit amet consectetur adipisicing elit. Sed nihil esse pariatur itaque, accusantium
                                        adipisci. Sed, blanditiis sint nesciunt placeat aperiam in dolor pariatur, officia animi rem quidem
                                        ullam. Amet?</p>

                                </div>
                            </div>


                            <div className="col">
                                <div className="container">



                                    <img src={mohit} className="center"
                                        style={mohit_logo_css} width="100"
                                        height="100" alt=" Avatar" />
                                    <h3 style={{ textAlign: "center" }}>Mohit Gambhire</h3>
                                    <p>Lorem ipsum, dolo r sit amet consectetur adipisicing elit. Sed nihil esse pariatur itaque, accusantium
                                        adipisci. Sed, blanditiis sint nesciunt placeat aperiam in dolor pariatur, officia animi rem quidem
                                        ullam. Amet?</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="text-center mb-5 mx-5">
                    <div class="social-btns">
                        <a href="#" class="fa fa-facebook fa-2x" style={{marginRight: "9px",textDecoration: "none"}}></a>
                        <a href="#" class="fa fa-twitter fa-2x" style={{marginRight: "9px",textDecoration: "none"}}></a>
                        <a href="#" class="fa fa-linkedin fa-2x" style={{marginRight: "9px",textDecoration: "none"}}></a>
                        <a href="#" class="fa fa-instagram fa-2x" style={{marginRight: "9px",textDecoration: "none"}}></a>
                        <a href="#" class="fa fa-github fa-2x" style={{marginRight: "9px",textDecoration: "none"}}></a>
                    </div>
                </section>

                <div class="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.868)" }}>
                    © 2022 Copyright:
                    <a class="text-white text-decoration-none" href="">JungleSafari.com</a>
                </div>

            </footer>
            
        </>
    )
}
