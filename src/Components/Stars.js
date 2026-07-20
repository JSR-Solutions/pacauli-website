import React from "react";
import "../Styles/Stars.css";

const Stars = () => {
  return (
    <div>
      <div className="page-content">
        <div className="card-aks">
          <div className="content">
            <h2 className="title">Anshuman Bisht</h2>
            <p className="copy">
              The ‘Young Gun’ ,he is counted amoung one of the best freestyle
              skier and snowboarder amoung his age and famous for his speed and
              unique technique.He started sking at the age of 8 now holds the
              experience of more than a decade.
            </p>
            <h2 className="title-alt">Achievements:</h2>
            <p className="copy-alt">
              <ul className="achi-list-founder">
                <li>2018 Youngest ever to board down from Pangarchulla base</li>
                <li>2019 Only skier to Ski down from Tungnath Temple.</li>
                <li>
                  Founder of Cuddle the Himalaya Foundation (NGO that works in
                  field of Nature, Tradition, education and health in the
                  Himalayas)
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;
