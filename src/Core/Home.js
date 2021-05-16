import React, { useEffect } from "react";
import "../Styles/Home.css";
import Landingscreen from "../Components/Laningscreen";
import Footer from "../Components/Footer";
import Hometext from "../Components/Hometext";
import Hometext2 from "../Components/Hometext2";
import Header from "../Components/Header";
import Categorycards from "../Components/Categorycards";
import Quote from "../Components/Quote";
import a1 from "../Assets/1.jpeg";
import a2 from "../Assets/2.jpeg";
import a3 from "../Assets/3.jpeg";
import a4 from "../Assets/4.jpeg";
import a5 from "../Assets/5.jpg";
import a6 from "../Assets/6.jpg";
import a9 from "../Assets/9.jpg";
import a10 from "../Assets/10.jpg";
import Skiing from "../Assets/skiing.jpg";
import BikeTrips from "../Assets/biketrips.jpg";
import Trekking from "../Assets/trekking.jpg";
import Rafting from "../Assets/Rafting.jpg";
import Camping from "../Assets/camping.jpg";
import Expedition from "../Assets/expedition.jpg";
import Chardham from "../Assets/chardham.jpg";
import Cycling from "../Assets/cycling.jpg";
import Snowboarding from "../Assets/snowboarding.jpg";
import $ from "jquery";

const Home = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);
  return (
    <div>
      <Landingscreen />
      <Header />
      <Categorycards />
      <Quote />

      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="curved-div1">
        <Hometext
          src1={Trekking}
          heading1="Be Part of our Family"
          caption1="PAC Auli is a family thing it will be our pleasure to join the community and be a proud PACian. Our camps are on the prime location of Auli.From where you will be seeing a paranomic view of Nanda Devi,Brahmal,Nar Narayan and Sleeping beauty with a blessed location of a Apple orchid Farm."
          src2={Trekking}
          heading2="Overview"
          caption2="Trekking is something that makes you experience your level of strength. It's tied in with acknowledging demands, vanquishing dread, and exploring uninhabited areas at higher heights.

The Himalayan Trekking Trails in Uttrakhand ,Himanchal and Nepal is acclaimed as the best journeying locales and it draws in travelers from all over the world."
          mainheading="TREKKING"
          link={`/categories/1`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#222222"
            fill-opacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="curved-div2">
        <Hometext2
          data-aos="fade-left"
          src1={Skiing}
          heading1="Overview"
          caption1="Something alternate which you need to unexpectedly. Skiing is a vigorous and bold game that is useful for raising the pulse and for expanding cardiovascular perseverance. It's astonishing to cover miles in minutes on the most troublesome bends on snow-shrouded mountains.

Auli is the most loved spot for skiing darlings with incredible slants encompassed by excellent valleys. An ideal objective to pick up skiing and practice expertly for competitions."
          src2={Skiing}
          heading2="Exploring the Mountains"
          caption2="Trekking is something that makes you experience your level of strength. It's tied in with acknowledging demands, vanquishing dread, and exploring uninhabited areas at higher heights.

The Himalayan Trekking Trails in Uttrakhand ,Himanchal and Nepal is acclaimed as the best journeying locales and it draws in travelers from all over the world."
          mainheading="SKIING"
          link={`/categories/0`}
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222222"
          fill-opacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div class="curved-div1">
        <Hometext
          src1={Snowboarding}
          heading1="xyz"
          caption1="abc"
          src2={Snowboarding}
          heading2="Overview"
          caption2="No content provided"
          mainheading="SNOWBOARDING"
          link={`/categories/8`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#222222"
            fill-opacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,85.3C672,117,768,171,864,165.3C960,160,1056,96,1152,90.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div class="curved-div2">
        <Hometext2
          src1={Cycling}
          heading1="Overview"
          caption1="Cycling is always more than a adventure as you all know two wheels move the soul.We are offering you the best trails in the valley with the view and track you will never forget.This experience of yours will always live with you with flashbacks of you gliding and enjoying cycling in the Himalayas."
          src2={Cycling}
          heading2="It is a fresh start"
          caption2="Cycling in mountains is a game of riding bicycles on rough terrain, regularly over harsh territory, typically utilizing exceptionally planned off-road bicycles. 

Individuals are presently more worried about contaminations, greenery, just as their wellness consequently the rage for cycling, is expanding now. Individuals like to invest their energy in the middle of nature and investigating places around by cycle."
          mainheading="CYCLING"
          link={`/categories/3`}
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222222"
          fill-opacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div class="curved-div1">
        <Hometext
          src1={BikeTrips}
          heading1="What will you learn from it ?"
          caption1="You will be learning not to give up, stand up again and achieve your target. After climbing the top you will experience the feeling of Completion."
          src2={BikeTrips}
          heading2="Overview"
          caption2="Riding your number one motor alongside a streaming waterway in a delightful valley, is there much else charming than this? 

Ladakh, the fantasy objective for all riders and it is quite possibly the most visited places in India by bikers. Individuals are getting wild about riding and continue to look for places good for bike riding. 

It's an undertaking movement for individuals with a high Patience level since riding 300-350 kilometers in mountains is an intense assignment."
          mainheading="BIKE TRIPS"
          link={`/categories/2`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#222222"
            fill-opacity="1"
            d="M0,256L48,256C96,256,192,256,288,240C384,224,480,192,576,197.3C672,203,768,245,864,256C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div class="curved-div2">
        <Hometext2
          src1={Expedition}
          heading1="Overview"
          caption1="Each pinnacle of mountains isn't that simple to overcome. To investigate the immaculate excellence you need to transform yourself into a monster. 

It doesn't go under adventure sports, it's a dangerous movement to do in the wake of setting yourself up actually and intellectually, and it requires geological and specialized information too. 

There are heaps of mountain tops in our country which go under endeavor yet everybody needs more guts to go there."
          src2={Expedition}
          heading2="Overview"
          caption2="Something alternate which you need to unexpectedly. Skiing is a vigorous and bold game that is useful for raising the pulse and for expanding cardiovascular perseverance. It's astonishing to cover miles in minutes on the most troublesome bends on snow-shrouded mountains.

Auli is the most loved spot for skiing darlings with incredible slants encompassed by excellent valleys. An ideal objective to pick up skiing and practice expertly for competitions."
          mainheading="EXPEDITION"
          link={`/categories/6`}
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222222"
          fill-opacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div class="curved-div1">
        <Hometext
          src1={Rafting}
          heading1="Overview"
          caption1="Water, quite possibly the most smooth component on this planet. It continues to change its way, nature, and shape according to necessity. Rafting assists you in learning the method of change with hazardous and surprising floods of water.
Searching generally advantageous and testing place for waterway rafting then you should visit Hrishikesh, perhaps the best area in India for boating where you can enjoy rafting in the rushes of the stream strong Ganga."
          src2={Rafting}
          heading2="Overview"
          caption2="Water, quite possibly the most smooth component on this planet. It continues to change its way, nature, and shape according to necessity. Rafting assists you in learning the method of change with hazardous and surprising floods of water.
Searching generally advantageous and testing place for waterway rafting then you should visit Hrishikesh, perhaps the best area in India for boating where you can enjoy rafting in the rushes of the stream strong Ganga."
          mainheading="RAFTING"
          link={`/categories/5`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#222222"
            fill-opacity="1"
            d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,138.7C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div class="curved-div2">
        <Hometext2
          src1={Camping}
          heading1="Overview"
          caption1="Far away from this populated world, on top of any bluff, the world under the sky brimming with gleaming stars, other than your camp and some tea what else an individual can wish to get harmony. Camping invigorates your brain and soul and assists you in continuing your existence with more energy.

Each individual requires a break from this rushed and occupied way of life when he can invigorate his brain and plan their future. Outdoors in Uttrakhand can help you in reestablishing your energy and inventiveness"
          src2={Camping}
          heading2="Overview"
          caption2="Far away from this populated world, on top of any bluff, the world under the sky brimming with gleaming stars, other than your camp and some tea what else an individual can wish to get harmony. Camping invigorates your brain and soul and assists you in continuing your existence with more energy.

Each individual requires a break from this rushed and occupied way of life when he can invigorate his brain and plan their future. Outdoors in Uttrakhand can help you in reestablishing your energy and inventiveness"
          mainheading="CAMPING"
          link={`/categories/4`}
        />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222222"
          fill-opacity="1"
          d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,170.7C672,181,768,171,864,144C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div class="curved-div1">
        <Hometext
          src1={Chardham}
          heading1=""
          caption1="Uttarakhand is considered as DEV BHOOMI and the whole locale is acclaimed for its otherworldliness. Each of the 4 dhaams are there in Uttarakhand and consistently lakhs of individuals visit Kedarnath, Badrinath, Gangotri, and Yamunotri. Kedarnath sanctuary is quite possibly the most visited puts around here and it just remaining parts open for 6-7 months.Uttarakhand has its own excellence to show and its own story to describe. Its an ideal objective where you can go with your family in light of the fact that there is something for everybody."
          src2={Chardham}
          heading2="Overview"
          caption2="Uttarakhand is considered as DEV BHOOMI and the whole locale is acclaimed for its otherworldliness. Each of the 4 dhaams are there in Uttarakhand and consistently lakhs of individuals visit Kedarnath, Badrinath, Gangotri, and Yamunotri. Kedarnath sanctuary is quite possibly the most visited puts around here and it just remaining parts open for 6-7 months.Uttarakhand has its own excellence to show and its own story to describe. Its an ideal objective where you can go with your family in light of the fact that there is something for everybody."
          mainheading="SPIRITUAL TOURS"
          link={`/categories/7`}
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#222222"
            fill-opacity="1"
            d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,117.3C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
