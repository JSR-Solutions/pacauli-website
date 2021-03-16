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
import CatStrip from "../Components/CategoryStrip"



const Categories = () => {
const category=[{Name: "Skiing", img:Skiing},
                {Name: "Trekking",img:Trekking},
                {Name:"Rock Climbing", img:Rock},
                {Name:"Cycling", img:Cycling},
                {Name:"Camping", img:Camping},
                {Name:"Rafting", img:Rafting},
                {Name:"Expediton", img:Expedition},
                {Name:"CharDham", img:Chardham},
];

    return (
        <div>

            <Header />
            <div className="heading-categories">
          <p>&nbsp;&nbsp;Categories&nbsp;&nbsp;</p>
        </div>
            <div className="catt">
            {category.map((cat) =>{
                return(
                <CatStrip Name={cat.Name} img={cat.img} />
                )
            })
        }
        </div>
        <Footer/>
            
</div>


            
    );
}
export default Categories;