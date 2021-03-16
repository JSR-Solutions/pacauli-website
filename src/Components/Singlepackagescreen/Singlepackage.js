import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import './Singlepackage.css'
import Ima from '../../Assets/Landing/p2.jpg'
import Pricecard from './Pricecard'
import Formcomp from './Form'

const Singlepackage = () => {
    return (
        <div className='single-package-main'>
            <div className='single-package-upper'>
                <Container>
                    <Row>
                        <img src={Ima} alt='image' />
                    </Row>
                </Container>
            </div>
            <div className='single-package-lower'>
                <Container>
                    <Row className='sngl-pack-row'>
                        <Col md={8}>
                            <div className='single-package-left'>
                                <div className='singel-pack-name'>
                                    <div>
                                        <h3>Blue Poppy Resorts, Auli | Luxury Staycation Deal</h3>
                                        <h4>Level- Easy</h4>
                                        <h5>trekDistance</h5>
                                        <h5>Package Type</h5>
                                        <h6>Duration</h6>
                                    </div>
                                </div>
                                <div className='single-package-navbar'>
                                    <div><p>Itinerary</p></div>
                                    <div><p>Package Options</p></div>
                                    <div><p>Map</p></div>
                                    <div><p>Reviews</p></div>
                                    <div><p>Policies</p></div>
                                    <div><p>overview</p></div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='single-package-right'>
                                <Pricecard />
                                <Formcomp />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Singlepackage;