import React from 'react';
import '../Styles/Landingscreen.css'
import { Carousel } from 'react-bootstrap'

const Laningscreen = () => {
    return (
        <div className="home-carousel">
            <Carousel>
                <Carousel.Item className="container-fluid carousel-item item-one">
                    <h1 className="carousel-title">You Only Live Once</h1>
                    <h4 className="carousel-subtitle">Make memories you will forever cherish</h4>
                </Carousel.Item>
                <Carousel.Item className="container-fluid carousel-item item-two">
                    <h1 className="carousel-title">Take The Road Not Taken</h1>
                    <h4 className="carousel-subtitle">Travelling is what makes us feel alive</h4>
                </Carousel.Item>
                <Carousel.Item className="container-fluid carousel-item item-three">
                    <h1 className="carousel-title">What's life without travelling?</h1>
                    <h4 className="carousel-subtitle">Don't spend your entire life in the place you were born</h4>
                </Carousel.Item>
                <Carousel.Item className="container-fluid carousel-item item-four">
                <h1 className="carousel-title">What's life without travelling?</h1>
                <h4 className="carousel-subtitle">Don't spend your entire life in the place you were born</h4>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Laningscreen;