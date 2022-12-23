import React from "react";
import loaddingImage from "../assets/Loading_icon.gif";

const Loading = () => {
  return (
    <div className="section-center">
      <img src={loaddingImage} alt="loading" />
    </div>
  );
};

export default Loading;
