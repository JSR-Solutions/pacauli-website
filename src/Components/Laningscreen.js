import React from 'react';
import '../Styles/Landingscreen.css'
import { Carousel } from 'react-bootstrap'

const Laningscreen = () => {
    return (
        <div className="home-carousel">
            <Carousel>
                <Carousel.Item className="container-fluid carousel-item item-one">
                    <div className='landing-div'>
                        <h1 className="carousel-title">You Only Live Once</h1>
                        <h4 className="carousel-subtitle">Make memories you will forever cherish</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="container-fluid carousel-item item-two">
                    <div className='landing-div'>
                        <h1 className="carousel-title">Take The Road Not Taken</h1>
                        <h4 className="carousel-subtitle">Travelling is what makes us feel alive</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="container-fluid carousel-item item-three">
                    <div className='landing-div'>
                        <h1 className="carousel-title">What's life without travelling?</h1>
                        <h4 className="carousel-subtitle">Don't spend your entire life in the place you were born</h4>
                    </div>
                </Carousel.Item>
                <Carousel.Item className="container-fluid carousel-item item-four">
                    <div className='landing-div'>
                        <h1 className="carousel-title">What's life without travelling?</h1>
                        <h4 className="carousel-subtitle">Don't spend your entire life in the place you were born</h4>
                    </div>
                </Carousel.Item>
            </Carousel>

            <div>
            fytfyfguyguy
            </div>
        </div>
    );
};

export default Laningscreen;