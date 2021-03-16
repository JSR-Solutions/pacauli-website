import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/categoryPage.css";
import Skiing from "../Assets/skiing.jpg";
import Rock from "../Assets/rockClimbing.jpg";
import Trekking from "../Assets/trekking.jpg";
import Rafting from "../Assets/Rafting.jpg";
import Camping from "../Assets/camping.jpg";
import Expedition from "../Assets/expedition.jpg";
import Chardham from "../Assets/chardham.jpg";
import Cycling from "../Assets/cycling.jpg";
import CatStrip from "../Components/CategoryStrip";

const Categories = () => {
  const category = [
    {
      Name: "Skiing",
      img: Skiing,
      quote: "“A pair of skis are the ultimate transportation to freedom.”",
    },
    {
      Name: "Trekking",
      img: Trekking,
      quote: "“Every mountain top is within reach if you just keep climbing.”",
    },
    {
      Name: "Rock Climbing",
      img: Rock,
      quote: "“The best view comes after the hardest climb.”",
    },
    {
      Name: "Cycling",
      img: Cycling,
      quote: "“Nothing compares to the simple pleasure of riding a bike”",
    },
    {
      Name: "Camping",
      img: Camping,
      quote: "“The stars were better company anyway”",
    },
    {
      Name: "Rafting",
      img: Rafting,
      quote:
        "“The first river you paddle runs through the rest of your life. It bubbles up in pools and eddies to remind you who you are.”",
    },
    {
      Name: "Expediton",
      img: Expedition,
      quote: "“Life is either a daring adventure or nothing.”",
    },
    {
      Name: "CharDham",
      img: Chardham,
      quote: "“Chardham yatra washes away all sins and opens doors for Moksha”",
    },
  ];

  return (
    <div>
      <Header />
      <div className="heading-categories">
        <p>&nbsp;&nbsp;Categories&nbsp;&nbsp;</p>
      </div>
      <div className="catt">
        {category.map((cat) => {
          return <CatStrip Name={cat.Name} img={cat.img} quote={cat.quote} />;
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Categories;
