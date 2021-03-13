import React from 'react';
import '../Styles/Landingscreen.css'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import Landingcard from './Landingcard'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Laningscreen = () => {

    const arr = [1, 2, 5, 5, 3, 7, 9, 5]
    const responsive = {
        0: { items: 1 },
        650: { items: 2 },
        767: { items: 1 },
        860: { items: 2 },
        1218: { items: 2 },
        1220: { items: 3 },
        1400: { items: 3 }
    };

    const trekItems = arr.map((e, r) => {
        return (
            <Landingcard />
        );
    });

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

            <div className='landing-bottom-part'>
                <Container fluid>
                    <Row>
                        <Col md={3} xs={12}>
                            <div className='landing-bottom-left'>
                                <h5>Top Of The Last Week</h5>
                                <p>Treding package of the last week</p>
                            </div>
                        </Col>
                        <Col md={9} xs={12}>
                        <div className='landing-carousel'>
                            <AliceCarousel
                                responsive={responsive}
                                items={trekItems}
                                fadeOutAnimation={true}
                                disableDotsControls={true}
                                infinite={true}
                                autoPlayInterval={2500}
                                autoPlayControls={false}
                                autoPlayStrategy={"all"}
                                autoPlay={true}
                            />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Laningscreen;




// <Row>
// {
//     arr.map((n, m) =>
//         <Col md={4}>
//             <Landingcard />
//         </Col>
//     )
// }
// </Row>