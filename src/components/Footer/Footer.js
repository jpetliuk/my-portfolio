import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div id="footerContainer">
      <h2>JEREMIAS PETLIUK</h2>
      <div className="footerMedia">
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://github.com/jpetliuk"
        >
          <FontAwesomeIcon className="footerIcon" icon={faGithub} />
        </a>
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://www.linkedin.com/in/jeremias-petliuk/"
        >
          <FontAwesomeIcon className="footerIcon" icon={faLinkedin} />
        </a>
        <a href="mailto: jeremias.petliuk@gmail.com">
          <FontAwesomeIcon className="footerIcon" icon={faEnvelope} />
        </a>
      </div>
      <p>© {year}, built and designed by Jeremias Petliuk</p>
    </div>
  );
};

export default Footer;
