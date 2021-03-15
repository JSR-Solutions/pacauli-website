import React from "react";
import Landingscreen from "../Components/Laningscreen";
import Footer from "../Components/Footer";
import Hometext from "../Components/Hometext";
import Header from "../Components/Header";
import Collapsiblecard from "../Components/Collapsiblecard";
import Categorycards from "../Components/Categorycards";
import Horizontalscroll from "../Components/Horizontalscroll";
import Quote from "../Components/Quote";


const Home = () => {
  return (
    <div>
      <Landingscreen />
      <Header />
      <Categorycards />
      <Quote/>
      <Hometext src1 = "https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
       heading1 = "xyz" caption1 = "abc" 
       src2 = "https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
       heading2 = "xyz" caption2 = "abc" mainheading="TREKKING" />
       
      <Footer />
    </div>
  );
};

export default Home;
