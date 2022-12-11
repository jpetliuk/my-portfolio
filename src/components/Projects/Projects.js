import "./Projects.css";
import { Link } from "react-router-dom";
import klapPreview from "../../assets/img/klap/KlapPreview.png";
import targetGymPreview from "../../assets/img/klap/targetGymPreview.png";

const Projects = () => {
  return (
    <div id="projectsContainer">
      <h1>Projects</h1>
      <div className="projectsProjectsContainer">
        <div className="projectsProject">
          <div className="projectDescription">
            <h1>Klap Tools</h1>
            <h2>Frontend and Design</h2>
            <div className="projectTool">
              <p>Wordpress</p>
            </div>
            <p>
              Klap Tools are a team of professional musicians and sound
              engineers with more than 10 years of experience providing audio
              and music solutions for companies, labels, commercials and
              artists.
            </p>
            <div className="projectDescriptionButton">
              <Link to={"/project/klap-tools"}>
                <button>View Project</button>
              </Link>
            </div>
          </div>
          <div className="projectsSnippet">
            <img src={klapPreview} alt="klaptools preview" />
          </div>
        </div>
        <div className="projectsProject">
          <div className="projectDescription">
            <h1>Target GYM</h1>
            <h2>Frontend and Design</h2>
            <div className="projectTool">
              <p>React</p>
            </div>
            <p>
              Target Gym is a gym franchaise located in Buenos Aires, Argentina,
              we redesing the website and gave it a fresh look.
            </p>
            <div className="projectDescriptionButton">
              <Link to={"/project/target-gym"}>
                <button>View Project</button>
              </Link>
            </div>
          </div>
          <div className="projectsSnippet">
            <img src={targetGymPreview} alt="klaptools preview" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
