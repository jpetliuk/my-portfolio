import "./About.css";
import { useState, useEffect } from "react";
import Form from "./Form";
import LogosCarrousel from "./LogosCarrousel";

const About = ({ aboutHandler }) => {
  useEffect(() => {
    return document.body.classList.add("noScroll");
  }, []);

  const [out, setOut] = useState(true);

  const outAnimation = () => {
    setOut(false);
    document.body.classList.remove("noScroll");
    setTimeout(() => {
      aboutHandler();
    }, 500);
  };

  return (
    <div
      className={
        out ? "aboutContainerWraper" : "aboutContainerWraper backgroundOut"
      }
    >
      <div className="aboutContainer">
        <div
          style={
            {
              // backgroundImage: `url("/backgrounds/skillsBackground6.svg")`,
            }
          }
          className={out ? "aboutInfo" : "aboutInfo outInfoAnimation"}
        >
          <div className="aboutText">
            <h1>About me.</h1>
            <p>Frontend Developer.</p>
            <p>
              Hello I'm Jeremias Petliuk, a 22-year-old Frontend developer born
              in Argentina.
              <br />I love to learn new technologies and building all kinds of
              things, resolve problems, create smart user interface and imagine
              useful interaction.
            </p>
          </div>
          <LogosCarrousel />
        </div>
        <div className={out ? "aboutForm" : "aboutForm outFormAnimation"}>
          <div>
            <p className="closeAbout" onClick={outAnimation}>
              X
            </p>
            <h1>Let's chat</h1>
            <p className="formSubtitlte">
              Send me a message so I can know more about you.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
