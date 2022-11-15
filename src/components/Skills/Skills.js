import "./Skills.css";
import temporary from "../../logo.svg";

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
            <span>S</span>
            <span>k</span>
            <span>i</span>
            <span>l</span>
            <span>l</span>
            <span>s</span>
          </h1>
          <img src={temporary} />
        </div>
        <div className="skillsListDescription">
          <div className="skillsList">
            <div>
              <img src={temporary} />
              <p>Javascript</p>
            </div>
            <div>
              <img src={temporary} />
              <p>HTML</p>
            </div>
            <div>
              <img src={temporary} />
              <p>CSS</p>
            </div>
            <div>
              <img src={temporary} />
              <p>React</p>
            </div>
            <div>
              <img src={temporary} />
              <p>SASS</p>
            </div>
            <div>
              <img src={temporary} />
              <p>Node.js</p>
            </div>
            <div>
              <img src={temporary} />
              <p>Firebase</p>
            </div>
            <div>
              <img src={temporary} />
              <p>MongoDB</p>
            </div>
            <div>
              <img src={temporary} />
              <p>Bootstrap</p>
            </div>
            <div>
              <img src={temporary} />
              <p>Wordpress</p>
            </div>
            <div>
              <img src={temporary} />
              <p>Git</p>
            </div>
            <div>
              <img src={temporary} />
              <p>Command Line</p>
            </div>
            <div>
              <img src={temporary} />
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
