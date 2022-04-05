import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import leopard from "./images/leopard.jpeg";
import lion from "./images/lion.jpg";
import van from "./images/van.jpg";
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

export default function CarouselComp() {
    return (
        <>
            <div >

                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100" alt="Image Not Found" width="1400" height="650"
                            src={leopard}

                        />
                        <Carousel.Caption>
                            <h5>Welcome to JungleSafari</h5>
                            <p>Best of Best</p>
                            <NavLink type="button" className="btn btn-primary" to="/login">Book Safari Ticket</NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100" alt="Image Not Found" width="1400" height="650"
                            src={lion}

                        />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100" alt="Image Not Found" width="1400" height="650"
                            src={van}

                        />
                        <Carousel.Caption>
                            <h3>Label for Third slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </>
    )
}
