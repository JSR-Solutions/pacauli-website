import React from "react";
import Landingscreen from "../Components/Laningscreen";
import Footer from "../Components/Footer";
import Hometext from "../Components/Hometext";
import Header from '../Components/Header'
import Collapsiblecard from '../Components/Collapsiblecard'
const Home = () => {
  return (
    <div>
      <Landingscreen />
      
      <Header />
      <Collapsiblecard />
      <Footer />
    </div>
  );
};

export default Home;
