import "./PhoneNavBar.css";
import { useState } from "react";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PhoneNavBar = ({ aboutHandler }) => {
  const [show, setShow] = useState(false);

  const displayNav = () => {
    setShow(!show);
  };

  return (
    <>
      <FontAwesomeIcon
        className="hamburger"
        icon={faBars}
        onClick={displayNav}
      />
      <div className={show === true ? "modalNavBar show" : "modalNavBar"}>
        <div className="modalNavBarContent">
          <FontAwesomeIcon
            className="hamburger"
            icon={faX}
            onClick={displayNav}
          />
          <ul>
            <li>
              <Link to="/">
                <p>back home</p>
              </Link>
            </li>
            <li>
              <p
                onClick={() => {
                  aboutHandler();
                  displayNav();
                }}
              >
                Contact
              </p>
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
      </div>
    </>
  );
};

export default PhoneNavBar;
