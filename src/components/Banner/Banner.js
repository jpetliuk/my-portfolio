import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const Banner = ({ aboutHandler }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="bannerShadow">
      <div
        className="bannerMovment"
        style={{
          bottom: mousePos.y * 0.4 + 140,
          right: mousePos.x * 0.05 + 240,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment particle2"
        style={{
          bottom: mousePos.y * 0.2 + 120,
          right: mousePos.x * 0.04 + 200,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment"
        style={{
          top: mousePos.y * 0.22 + 110,
          left: mousePos.x * 0.12 + 230,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment particle2"
        style={{
          top: mousePos.y * 0.25 + 150,
          left: mousePos.x * 0.1 + 300,
        }}
      >
        <div></div>
      </div>
      <div
        className="bannerMovment"
        style={{
          bottom: mousePos.y * 0.1 + 10,
          left: mousePos.x * 0.05 + 100,
        }}
      >
        <div></div>
      </div>
      <div className="bannerMediaLinks">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/jpetliuk"
        >
          <p>github</p>
          <FontAwesomeIcon className="bannerIcon" icon={faGithub} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.linkedin.com/in/jeremias-petliuk/"
        >
          <p>linkedin</p>
          <FontAwesomeIcon className="bannerIcon" icon={faLinkedin} />
        </a>
        <a href="mailto: jeremias.petliuk@gmail.com">
          <p>mail</p>
          <FontAwesomeIcon className="bannerIcon" icon={faEnvelope} />
        </a>
      </div>
      <div id="bannerContainer">
        <div className="bannerContent">
          <div className="bannerTitle">
            <h1>
              <span>H</span>
              <span>i</span>
              <span>&nbsp;</span>
              <span>I</span>
              <span>'</span>
              <span>m</span>
              <span>&nbsp;</span>
              <span>J</span>
              <span>e</span>
              <span>r</span>
              <span>e</span>
              <span>m</span>
              <span>i</span>
              <span>a</span>
              <span>s</span>
              <span>&nbsp;</span>
              <span>|</span>
              <span>&nbsp;</span>
              <span>F</span>
              <span>r</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>e</span>
              <span>n</span>
              <span>d</span>
              <span>&nbsp;</span>
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
            </h1>
          </div>
          <p>I love learning and creating interesting stuff.</p>
          <div className="bannerAbout">
            <button onClick={aboutHandler}>About Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
