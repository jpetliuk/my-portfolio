import "./Footer.css";
import temporary from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footerContainer">
      <h2>JEREMIAS PETLIUK</h2>
      <div className="footerMedia">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/jpetliuk"
        >
          <FontAwesomeIcon className="bannerIcon" icon={faGithub} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.linkedin.com/in/jeremias-petliuk/"
        >
          <FontAwesomeIcon className="bannerIcon" icon={faLinkedin} />
        </a>
        <a href="mailto: jeremias.petliuk@gmail.com">
          <FontAwesomeIcon className="bannerIcon" icon={faEnvelope} />
        </a>
      </div>
      <p>© 2022 frontend & design by Jeremias Petliuk.</p>
    </div>
  );
};

export default Footer;
