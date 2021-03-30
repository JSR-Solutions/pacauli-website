import React, { useState, useEffect } from "react";
import "../Styles/SingleCatScreen.css";
import category from "../helper/categoryData";
import { Row, Col } from "react-bootstrap";
import Card from "../Components/Card3";
import firebase from "firebase";

function SingleCatScreen(props) {
  const headingStyle = {
    background: `linear-gradient(45deg, rgba(44, 44, 44, 0.25), rgba(44, 44, 44, 0.25)),url(${category[props.index].img
      })`,
    height: "100vh",
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

  const [packages, setPackages] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    getPackages();
  }, []);

  const getPackages = () => {
    setPackages([]);
    db.collection(category[props.index].Name)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot) {
          querySnapshot.docs.forEach((doc) => {
            setPackages((prev) => {
              return [...prev, doc.data()];
            });
          });
        }
      });
  };

  return (
    <div>
      <div style={headingStyle} className="heading-catSreen">
        <p>&nbsp;&nbsp;{category[props.index].Name}&nbsp;&nbsp;</p>
      </div>
      <div className="category-quote-div">
        <p className="category-quote">{category[props.index].quote}</p>
        <p className="category-line">
          Have a look at our {category[props.index].Name} packages for a
          wonderful and memorable {category[props.index].Name} experience.
        </p>
      </div>
      <div className="h_cardDiv">
        <Row>
          {packages &&
            packages.map((pckg) => {
              return (
                <Col lg={3} md={6} sm={12}>
                  <Card
                    packageName={pckg.name}
                    duration={pckg.duration}
                    costing={pckg.pricing[0].cost}
                    imageUrl={pckg.imageUrl}
                    package={pckg}
                    categoryName={category[props.index].Name}
                    rating={pckg.rating}
                  />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}
export default SingleCatScreen;
