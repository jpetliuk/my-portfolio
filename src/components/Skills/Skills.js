import "./Skills.css";
import myPhoto from "../../assets/img/myPhoto.png";
import playaFront from "../../assets/img/playaFront.jpg";
import playaBack from "../../assets/img/playaBack.jpg";

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

const Skills = () => {
  return (
    <div className="skillsShadow">
      <div
        id="skillsContainer"
        style={{
          backgroundImage: `url("/backgrounds/skillsBackground6.svg")`,
        }}
      >
        <div className="skillsTitlePicture">
          <h1>
            <span>M</span>
            <span>y</span>
            <span>&nbsp;</span>
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
          </h1>
          <img src={playaFront} />
        </div>
        <div className="skillsListDescription">
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
          <div className="skillsDescription">
            <h2>I love building stuff 📱</h2>
            <p>
              I started playing with computers when I was 11 years-old. Since
              then I have been tinkering with all sorts of technologies that in
              some way or another led me to work on music, photography, sound
              engineering, electric engineering, automation, video production,
              feature film post-production, VR games, and 3D sound.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
