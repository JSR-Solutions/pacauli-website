import React from "react";
import Landingscreen from "../Components/Laningscreen";
import Footer from "../Components/Footer";
import Hometext from "../Components/Hometext";
import Header from "../Components/Header";
import Collapsiblecard from "../Components/Collapsiblecard";
import Categorycards from "../Components/Categorycards";
const Home = () => {
  return (
    <div>
      <Landingscreen />
      <Header />
      <Categorycards />
      <Footer />
    </div>
  );
};

export default Home;
