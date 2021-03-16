import React from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/categoryPage.css"
import Skiing from "../Assets/skiing.jpg"
import Rock from "../Assets/rockClimbing.jpg"
import Trekking from "../Assets/trekking.jpg"
import Rafting from "../Assets/Rafting.jpg"
import Camping from "../Assets/camping.jpg"
import Expedition from "../Assets/expedition.jpg"
import Chardham from "../Assets/chardham.jpg"
import Cycling from "../Assets/cycling.jpg"
import {Row,Col} from "react-bootstrap"



const Categories = () => {
    return (
        <div>
            <Header />
            <div className="h_categoryPage">
            <div className="categoryDiv" >
            <Row style={{paddingBottom:"80px"}}>
            <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Skiing}/>
                    <div>
                <h1>Skiing </h1>
                <p>Skiing is a dance and the mountain always leads</p>
                </div>
                </div>
                </Col>
                <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Trekking}/>
                    <div>
                <h1>Trekking </h1>
                <p>The best view comes after the hardest climb</p>
                </div>
                </div>
                </Col>
                <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Rock}/>
                    <div>
                <h1>Rock Climbing </h1>
                <p>It is not the mountain we conquer, but ourselves</p>
                </div>
                </div>
                </Col>
                </Row>
                
                <Row style={{paddingBottom:"80px"}}>
            <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Camping}/>
                    <div>
                <h1>Camping </h1>
                <p>The mountains are calling and you must go</p>
                </div>
                </div>
                </Col>
                <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Rafting}/>
                    <div>
                <h1>Rafting </h1>
                <p>Let the river take you to the heavens of nature</p>
                </div>
                </div>
                </Col>
                <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Expedition}/>
                    <div>
                <h1>Expediton</h1>
                <p>There is a whole world out there.<br></br>Pack your backpack and go</p>
                </div>
                </div>
                </Col>
                </Row>
                <Row style={{paddingBottom:"80px"}}>
            <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Cycling}/>
                    <div>
                <h1>Cycling </h1>
                <p>Life is like a bicycle, to stay balanced you must keep moving</p>
                </div>
                </div>
                </Col>
                <Col>
                <div className="categoryCard">
                    <img className="categoryImg" src={Chardham}/>
                    <div>
                <h1>Chardham </h1>
                <p>Thank the almighty for what you have</p>
                </div>
                </div>
                </Col>
                <Col>
                
                </Col>
                </Row>
            </div>    
            </div>
            <Footer />
        </div>
    );
};
export default Categories;