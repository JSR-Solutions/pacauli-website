import React from "react";
import "../Styles/Categorycards.css";
import { Row, Col } from "react-bootstrap";
import category from "../helper/categoryData";
import CategoryCard from "../Components/CategoryCard";

const Categorycards = () => {
  return (
    <div>
      <div className="team-section">
        <div className="headd">
          <h1>
            <span>WHAT DO WE OFFER?</span>
          </h1>
        </div>
        <Row data-aos="fade-up" className="team-cards-aks">
          {category.map((cat, index) => {
            if(index < 9){
            return (
              
              <Col className="category-card-col" lg={4} md={4} sm={12}>
                <CategoryCard img={cat.icon} title={cat.Name} index={index}/>
              </Col>
            );}
          })}
        </Row>
      </div>
    </div>
  );
};

export default Categorycards;
