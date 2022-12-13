import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import useWindowDimensions from "./WindowDimensions";
import PhoneNavBar from "./PhoneNavBar";

const HomeNavBar = ({ aboutHandler }) => {
  const { width } = useWindowDimensions();

  return width > 800 ? (
    <>
      <div id="navBarContainer">
        <ul>
          <li>
            <a href="#projectsContainer">
              <p>Projects</p>
            </a>
          </li>
          <li>
            <p onClick={aboutHandler}>Contact</p>
          </li>
        </ul>
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
    </>
  ) : (
    <PhoneNavBar aboutHandler={aboutHandler} />
  );
};

export default HomeNavBar;
