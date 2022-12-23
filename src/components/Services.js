import React from "react";
import { services } from "../utils/constants";
import { Wrapper } from "../styles/Services.styles";
const Services = () => {
  return (
    <div>
      <Wrapper>
        <div className="section-center">
          <article className="header">
            <h3>
              Cuustom furnitures <br />
              build for you
            </h3>
          </article>
          <div className="services-center">
            {services.map((service) => {
              return (
                <article key={service.id} className="service">
                  <span className="icon">{service.icon}</span>
                  <h4>{service.title}</h4>
                  <p>{service.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
