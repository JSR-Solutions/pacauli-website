import React from "react";
import "../Styles/SingleCatScreen.css";
import category from "../helper/categoryData";
import { Row, Col } from "react-bootstrap";
import Card from "../Components/Card3";

function SingleCatScreen(props) {
  const headingStyle = {
    background: `linear-gradient(45deg, rgba(44, 44, 44, 0.25), rgba(44, 44, 44, 0.25)),url(${
      category[props.index].img
    })`,
    height: "600px",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "10px 10px 80px 10px rgba(44, 44, 44, 0.45)",
  };
  return (
    <div>
      <div style={headingStyle} className="heading-catSreen">
        <p>&nbsp;&nbsp;{category[props.index].Name}&nbsp;&nbsp;</p>
      </div>
      <div className="category-quote-div">
        <p className="category-quote">{category[props.index].quote}</p>
        <p className="category-line">Have a look at our {category[props.index].Name} packages for a wonderful and memorable {category[props.index].Name} experience.</p>
      </div>
      <div className="h_cardDiv">
        <Row>
          <Col>
            <Card packageName = "KEDARNATH TREK JAI BHOLENATH" duration = "4D|3N" costing = "8,500" imageUrl = "https://firebasestorage.googleapis.com/v0/b/pacauli.appspot.com/o/kedarnath.jpg?alt=media&token=fea5604c-b305-4a02-a174-96505dd53cc9" rating = "4.3"/>
          </Col>
          <Col>
            <Card packageName = "KEDARNATH TREK JAI BHOLENATH" duration = "4D|3N" costing = "8,500" imageUrl = "https://firebasestorage.googleapis.com/v0/b/pacauli.appspot.com/o/kedarnath.jpg?alt=media&token=fea5604c-b305-4a02-a174-96505dd53cc9" rating = "4.3"/>
          </Col>
          <Col>
            <Card packageName = "KEDARNATH TREK JAI BHOLENATH" duration = "4D|3N" costing = "8,500" imageUrl = "https://firebasestorage.googleapis.com/v0/b/pacauli.appspot.com/o/kedarnath.jpg?alt=media&token=fea5604c-b305-4a02-a174-96505dd53cc9" rating = "4.3"/>
          </Col>
          <Col>
            <Card packageName = "KEDARNATH TREK JAI BHOLENATH" duration = "4D|3N" costing = "8,500" imageUrl = "https://firebasestorage.googleapis.com/v0/b/pacauli.appspot.com/o/kedarnath.jpg?alt=media&token=fea5604c-b305-4a02-a174-96505dd53cc9" rating = "4.3"/>
          </Col>
          <Col>
            <Card packageName = "KEDARNATH TREK JAI BHOLENATH" duration = "4D|3N" costing = "8,500" imageUrl = "https://firebasestorage.googleapis.com/v0/b/pacauli.appspot.com/o/kedarnath.jpg?alt=media&token=fea5604c-b305-4a02-a174-96505dd53cc9" rating = "4.3"/>
          </Col>
          <Col>
            <Card packageName = "KEDARNATH TREK JAI BHOLENATH" duration = "4D|3N" costing = "8,500" imageUrl = "https://firebasestorage.googleapis.com/v0/b/pacauli.appspot.com/o/kedarnath.jpg?alt=media&token=fea5604c-b305-4a02-a174-96505dd53cc9" rating = "4.3"/>
          </Col>
          <Col>
            <Card packageName = "KEDARNATH TREK JAI BHOLENATH" duration = "4D|3N" costing = "8,500" imageUrl = "https://firebasestorage.googleapis.com/v0/b/pacauli.appspot.com/o/kedarnath.jpg?alt=media&token=fea5604c-b305-4a02-a174-96505dd53cc9" rating = "4.3"/>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default SingleCatScreen;
