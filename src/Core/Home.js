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
          src1={a1}
          heading1="Be Part of our Family"
          caption1="PAC Auli is a family thing it will be our pleasure to join the community and be a proud PACian. Our camps are on the prime location of Auli.From where you will be seeing a paranomic view of Nanda Devi,Brahmal,Nar Narayan and Sleeping beauty with a blessed location of a Apple orchid Farm."
          src2={a2}
          heading2="What's Special about auli?"
          caption2="Auli is the best winter ski destination in India and hub for Trekking activities located at 9800 ft above sea level. It offers a variety of activities and mesmerising himalayan panorama view. When you visit Auli, Uttarakhand it will a lifelong memory as the things you see here will be cherished by you."
          mainheading="SWISS CAMPS & MUD HUTS"
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
          src1={a3}
          heading1="Auli the Trekking Hub"
          caption1="Auli /Joshimath is starting of many breathtaking and India’s best treks.Local people are passionate about exploring the mountains here they have been doing this work for past 60-70 years now ,as decades before there ancestors where all shepherds roaming and exploring the mountains with their livestock. With that connection to past and culture it gives Auli a boost."
          src2={a4}
          heading2="Exploring the Mountains"
          caption2="Trekking is something that makes you experience your level of strength. It's tied in with acknowledging demands, vanquishing dread, and exploring uninhabited areas at higher heights.

The Himalayan Trekking Trails in Uttrakhand ,Himanchal and Nepal is acclaimed as the best journeying locales and it draws in travelers from all over the world."
          mainheading="TREKKING"
          link={`/categories/1`}
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
          src1="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading1="xyz"
          caption1="abc"
          src2="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading2="Overview"
          caption2="Far away from this populated world, on top of any bluff, the world under the sky brimming with gleaming stars, other than your camp and some tea what else an individual can wish to get harmony. Camping invigorates your brain and soul and assists you in continuing your existence with more energy.

Each individual requires a break from this rushed and occupied way of life when he can invigorate his brain and plan their future. Outdoors in Uttrakhand can help you in reestablishing your energy and inventiveness"
          mainheading="CAMPING"
          link={`/categories/4`}
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
          src1={a5}
          heading1="Overview"
          caption1="Cycling is always more than a adventure as you all know two wheels move the soul.We are offering you the best trails in the valley with the view and track you will never forget.This experience of yours will always live with you with flashbacks of you gliding and enjoying cycling in the Himalayas."
          src2={a6}
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
          src1={a9}
          heading1="What will you learn from it ?"
          caption1="You will be learning not to give up, stand up again and achieve your target. After climbing the top you will experience the feeling of Completion."
          src2={a10}
          heading2="Himalaya Climbing"
          caption2="Rock climbing is a physically and mentally demanding sport, one that often tests a climber's strength, endurance, agility and balance along with mental control. Rockclimbing in the Himalayas is a lifetime experience as you will be Raiding the mighty Himalayas."
          mainheading="ROCK CLIMBING"
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
          src1="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading1="Overview"
          caption1="Something alternate which you need to unexpectedly. Skiing is a vigorous and bold game that is useful for raising the pulse and for expanding cardiovascular perseverance. It's astonishing to cover miles in minutes on the most troublesome bends on snow-shrouded mountains.

Auli is the most loved spot for skiing darlings with incredible slants encompassed by excellent valleys. An ideal objective to pick up skiing and practice expertly for competitions."
          src2="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading2="Overview"
          caption2="Something alternate which you need to unexpectedly. Skiing is a vigorous and bold game that is useful for raising the pulse and for expanding cardiovascular perseverance. It's astonishing to cover miles in minutes on the most troublesome bends on snow-shrouded mountains.

Auli is the most loved spot for skiing darlings with incredible slants encompassed by excellent valleys. An ideal objective to pick up skiing and practice expertly for competitions."
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
          src1="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading1="Overview"
          caption1="Water, quite possibly the most smooth component on this planet. It continues to change its way, nature, and shape according to necessity. Rafting assists you in learning the method of change with hazardous and surprising floods of water.
Searching generally advantageous and testing place for waterway rafting then you should visit Hrishikesh, perhaps the best area in India for boating where you can enjoy rafting in the rushes of the stream strong Ganga."
          src2="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
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
          src1="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading1="Overview"
          caption1="Each pinnacle of mountains isn't that simple to overcome. To investigate the immaculate excellence you need to transform yourself into a monster. 

It doesn't go under adventure sports, it's a dangerous movement to do in the wake of setting yourself up actually and intellectually, and it requires geological and specialized information too. 

There are heaps of mountain tops in our country which go under endeavor yet everybody needs more guts to go there."
          src2="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading2="Overview"
          caption2="Each pinnacle of mountains isn't that simple to overcome. To investigate the immaculate excellence you need to transform yourself into a monster. 

It doesn't go under adventure sports, it's a dangerous movement to do in the wake of setting yourself up actually and intellectually, and it requires geological and specialized information too. 

There are heaps of mountain tops in our country which go under endeavor yet everybody needs more guts to go there."
          mainheading="EXPEDITIONS"
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
          src1="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading1=""
          caption1="Char Dham is also known as the four abodes and is considered a sacred pilgrimage site in India. The Hindus suggest that once in a lifetime, people should do this holy Yatra. This pilgrimage yatra holds a significant essence to the devotees. It comprises the four sacred sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. Char Dham Yatra is also called the Chota Chardham Yatra, as these sites are very close to each other and are within Uttarakhand. People all over the world pay a visit to these pilgrimages to attain spirituality. All four sites have a specific deity. Yamunotri is dedicated to Goddess Yamuna, who goes to the high altitude of Rawai valley. Gangotri is dedicated to the river Goddess Ganga. Kedarnath is a part of Panch Kedar, and this pilgrimage is dedicated to Lord Shiva. It is close to the river Alaknanda. Badrinath is dedicated to Lord Vishnu. These holy pilgrimages are situated in the Garhwal Himalayas, where the Yatra route follows from West to East Direction. It starts clockwise, i.e., from  Yamunotri and then heading towards Gangotri then Kedarnath. This Yatra aspires people to go through salvation through difficulties of life. 
Primarily people visit the Char Dham for a spiritual purpose. Doing these four holy Yatra exhibits a blessed connection within an individual. There is this sense of inner self-satisfaction and contentment. Embarking on this journey will not only give peace to your soul but also prepares the soul for ‘Enlightenment.’"
          src2="https://images.unsplash.com/photo-1615662051070-59fc8d2804da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80"
          heading2="Overview"
          caption2="Char Dham is also known as the four abodes and is considered a sacred pilgrimage site in India. The Hindus suggest that once in a lifetime, people should do this holy Yatra. This pilgrimage yatra holds a significant essence to the devotees. It comprises the four sacred sites: Yamunotri, Gangotri, Kedarnath, and Badrinath. People all over the world pay a visit to these pilgrimages to attain spirituality. All four sites have a specific deity. Embarking on this journey will not only give peace to your soul but also prepares the soul for ‘Enlightenment.’"
          mainheading="CHAR DHAM"
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
