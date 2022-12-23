import React from "react";
import aboutImg from "../assets/hero-bcg.jpeg";
import { Wrapper } from "../styles/AbouutPage.styles";

const AboutPage = () => {
  return (
    <div>
      <Wrapper className="page  section section-center">
        <img src={aboutImg} alt="about" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur quas repellendus inventore, accusantium laboriosam
              quos quo vero odio corrupti iusto aut quae, iste ratione at autem
              rem nisi assumenda libero!
            </p>
          </div>
        </article>
      </Wrapper>
    </div>
  );
};

export default AboutPage;
