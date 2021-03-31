import React from "react";
import "../Styles/Stars.css";
import t3 from "../Assets/Team/t3.jpeg";
import "../Styles/TeamMemberCard.css";

const TeamMemberCard1 = () => {
  return (
    <div>
      <div className="page-content team-card">
        <div className="team-member-card">
          <div className="content">
            <h2 className="title">Vivek Panwar</h2>
            {/* <p className="copy">
              The ‘Young Gun’ ,he is counted amoung one of the best freestyle
              skier and snowboarder amoung his age and famous for his speed and
              unique technique.He started sking at the age of 8 now holds the
              experience of more than a decade.
            </p> */}
            <h2 className="title-alt">Achievements:</h2>
            <p className="copy-alt">
              <ul className="achi-list-founder">
                <li>
                1996 Second Position in Auli National Winter Games Open Skiing Championship
                </li>
                <li>1999 First Position in Winter Sports Championship</li>
                <li>2008 First position (GS) in 5th National Winter Games</li>
                <li>2012 First Position (GS) in National Open Skiing Championship</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const TeamMemberCard2 = () => {
    return (
      <div>
        <div className="page-content team-card">
          <div className="team-member-card2 team-member-card">
            <div className="content">
              <h2 className="title">Pramod Panwar</h2>
              {/* <p className="copy">
                The ‘Young Gun’ ,he is counted amoung one of the best freestyle
                skier and snowboarder amoung his age and famous for his speed and
                unique technique.He started sking at the age of 8 now holds the
                experience of more than a decade.
              </p> */}
              <h2 className="title-alt">Achievements:</h2>
              <p className="copy-alt">
                <ul className="achi-list-founder">
                  <li>
                  2010 Second Position in National Snowboard Championship Auli
                  </li>
                  <li>2012 Third Position in National Snowboarding Championship Gulmarg, J&K</li>
                  <li>2018 First ever to cover the Winter Malari Trial</li>
                  <li>2013 First Person to board down from The Urgam Valley</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const TeamMemberCard3 = () => {
      return (
        <div>
          <div className="page-content team-card">
            <div className="team-member-card3 team-member-card">
              <div className="content">
                <h2 className="title">Vandna Panwar</h2>
                {/* <p className="copy">
                  The ‘Young Gun’ ,he is counted amoung one of the best freestyle
                  skier and snowboarder amoung his age and famous for his speed and
                  unique technique.He started sking at the age of 8 now holds the
                  experience of more than a decade.
                </p> */}
                <h2 className="title-alt">Achievements:</h2>
                <p className="copy-alt">
                  <ul className="achi-list-founder">
                    <li>
                    1998 First Position National Skiing Championship Junior Auli
                    </li>
                    <li>2000 First Position in Winter Sports Junior Championship Slalom Auli</li>
                    <li>2008 First Position in 5th National Winter Games Gulmarg(Kashmir)</li>
                    <li>2011 Second Position in Auli Skiing Open Championship</li>
                    <li>2013 First Position in National Senior Alpine Sking Championship(GS)</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default TeamMemberCard1;
export {TeamMemberCard2, TeamMemberCard3};
