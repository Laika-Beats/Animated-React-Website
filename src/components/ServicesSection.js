import React from "react";
// import Icons
import clock from "../images/clock.svg";
import diaphragm from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import camrea from "../images/home2.png";

function ServicesSection() {
  return (
    <div className="services">
      <div className="description">
        <h2>
          {" "}
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficent</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="people icon" />
              <h3>Teamwork</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="money icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={camrea} alt="professional camrea" />
              <h3>Affordable</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
