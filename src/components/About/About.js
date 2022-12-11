import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faTerminal,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import {
  faJs,
  faReact,
  faCss3Alt,
  faHtml5,
  faSass,
  faNodeJs,
  faBootstrap,
  faWordpress,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Form from "./Form";

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
          <div>
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
          <div className="skillsList">
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faJs} />
              <p>Javascript</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faHtml5} />
              <p>HTML</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faCss3Alt} />
              <p>CSS</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faReact} />

              <p>React</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faSass} />
              <p>SASS</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faNodeJs} />
              <p>Node.js</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faDatabase} />
              <p>MongoDB</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faBootstrap} />
              <p>Bootstrap</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faWordpress} />
              <p>Wordpress</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faGit} />
              <p>Git</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faDatabase} />
              <p>Firebase</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faTerminal} />
              <p>Command Line</p>
            </div>
            <div>
              <FontAwesomeIcon className="skillsIcon" icon={faGears} />
              <p>RESTful APIs</p>
            </div>
          </div>
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
