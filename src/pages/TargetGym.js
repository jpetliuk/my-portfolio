import Footer from "../components/Footer/Footer";
import "./ProjectStyle.css";
import { useEffect, useState } from "react";
import firstPage from "../assets/img/klap/first-page.png";
import aboutUs from "../assets/img/klap/about-us.png";
import register from "../assets/img/klap/register.png";
import services from "../assets/img/klap/services.png";
import myAccount from "../assets/img/klap/my-account.png";
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
        <img className="projectImage" src={firstPage} alt="project preview" />
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
        <img className="projectImage" src={aboutUs} alt="project preview" />
        <img className="projectImage" src={register} alt="project preview" />
        <img className="projectImage" src={services} alt="project preview" />
        <img className="projectImage" src={myAccount} alt="project preview" />
      </div>
      <Footer />
    </div>
  );
};

export default TargetGym;
