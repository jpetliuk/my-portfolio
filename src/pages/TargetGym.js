import Footer from "../components/Footer/Footer";
import "./ProjectStyle.css";
import { useEffect, useState } from "react";
import home from "../assets/img/targetGym/home.png";
import sedes from "../assets/img/targetGym/sedes.png";
import sede from "../assets/img/targetGym/sede.png";
import NavBar from "../components/Navbar/NavBar";
import About from "../components/About/About";

const TargetGym = () => {
  const [showAbout, setShowAbout] = useState(false);

  const aboutHandler = () => {
    setShowAbout(!showAbout);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="targetGymContainer"
      style={{ backgroundImage: `url("/backgrounds/pageBackground.svg")` }}
    >
      <NavBar aboutHandler={aboutHandler} />
      {showAbout ? <About aboutHandler={aboutHandler} /> : null}
      <div className="banner">
        <h1>Target Gym</h1>
        <p>Fitness franchise.</p>
        <div className="roles">
          <p className="left">
            <span>contex</span> website redesign
          </p>
          <p className="center">
            <span>role</span> frontend developer
          </p>
          <p className="right">
            <span>period</span> mid 2022
          </p>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Target Gym</h1>
        <p>assadasdaf</p>
        <img className="projectImage" src={home} alt="project preview" />
        <div className="projectRelevantInfo">
          <div>
            <h2>Tools</h2>
            <p>React</p>
          </div>
          <div>
            <h2>Code</h2>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/jpetliuk/TARGET-GYM"
            >
              <p className="linkText">Code</p>
            </a>
          </div>
          <div>
            <h2>Live</h2>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://gregarious-scone-ad0e38.netlify.app/"
            >
              <p className="linkText">Site</p>
            </a>
          </div>
        </div>
        <h1>Project Purpose and Goal</h1>
        <p>afadjfaodfaiofdsiofdfisdfspid</p>
        <img className="projectImage" src={sedes} alt="project preview" />
        <img className="projectImage" src={sede} alt="project preview" />
      </div>
      <Footer />
    </div>
  );
};

export default TargetGym;
