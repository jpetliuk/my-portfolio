import React from "react";
import "./Banner.css";
import temporary from "../../logo.svg";

const Banner = () => {
  return (
    <div className="bannerShadow">
      <div id="bannerContainer">
        <div className="bannerContent">
          <h1>Hi I'm Jeremias | Frontend Developer</h1>
          <div className="bannerMediaLinks">
            <img src={temporary} />
            <img src={temporary} />
            <img src={temporary} />
          </div>
          <p>place holder text for description about myselft.</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
