import React, { useState } from "react";
import { Wrapper } from "../styles/ProductImages.styles";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(images[0]);
  return (
    <Wrapper>
      <img src={mainImg.url} alt="main" className="main" />
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              onClick={() => setMainImg(images[index])}
              alt=""
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductImages;
