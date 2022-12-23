import React from "react";
import { Wrapper } from "../styles/Contact.styles";

const Contact = () => {
  return (
    <div>
      <Wrapper>
        <div className="section-center">
          <h3>Join our Newsletter</h3>
          <div className="content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              mollitia, facere autem perferendis laboriosam corporis,
              exercitationem quibusdam sunt asperiores, libero commodi magni
              amet assumenda soluta totam fugit iste suscipit voluptatibus!
            </p>
            <form action="">
              <input
                type="email"
                name=""
                className="form-input"
                placeholder="enter  email"
              />
              <button type="submit" className="submit-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
