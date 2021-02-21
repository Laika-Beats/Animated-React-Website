import React from "react";
import { About, Description, Image } from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import styled from "styled-components";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import camrea from "../img/home2.png";
import money from "../img/money.svg";

function ServicesSection() {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <Description>
        <h2>
          {" "}
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficent</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="people icon" />
              <h3>Teamwork</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="circle icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>I LOVE to create and design.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={camrea} alt="professional camrea" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
