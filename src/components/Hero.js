import React from "react";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import { Wrapper } from "../styles/Hero.Styles";

const Hero = () => {
  return (
    <div>
      <Wrapper className="section-center">
        <article className="content">
          <h1>
            Design Your <br />
            Comfort Zone
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            debitis sapiente, possimus quia cupiditate, eius, quas quod ullam
            tenetur eaque officia ea. Fugit numquam error ut eligendi explicabo
            voluptatem ab!
          </p>
          <Link to="/products" className="btn hero-btn">
            Shop Now
          </Link>
        </article>
        <article className="img-container">
          <img src={heroBcg} alt="" className="main-img" />
          <img src={heroBcg2} alt="" className="accent-img" />
        </article>
      </Wrapper>
    </div>
  );
};

export default Hero;
