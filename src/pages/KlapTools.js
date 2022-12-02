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

const KlapTools = () => {
  const [showAbout, setShowAbout] = useState(false);

  const aboutHandler = () => {
    setShowAbout(!showAbout);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="klapToolsContainer"
      style={{ backgroundImage: `url("/backgrounds/pageBackground.svg")` }}
    >
      <NavBar aboutHandler={aboutHandler} />
      {showAbout ? <About aboutHandler={aboutHandler} /> : null}
      <div className="banner">
        <h1>Klap Tools</h1>
        <p>Music production, mix and mastering.</p>
        <div className="roles">
          <p className="left">
            <span>contex</span> website design
          </p>
          <p className="center">
            <span>role</span> developer and design
          </p>
          <p className="right">
            <span>period</span> early 2022
          </p>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Klap Tools</h1>
        <p>
          Klap Tools are a team of professional musicians and sound engineers
          with more than 10 years of experience providing audio and music
          solutions for companies, labels, commercials and artists.
        </p>
        <img className="projectImage" src={firstPage} alt="project preview" />
        <div className="projectRelevantInfo">
          <div>
            <h2>Tools</h2>
            <p>Wordpress</p>
          </div>
          <div>
            <h2>Live</h2>
            <a target={"_blank"} rel="noreferrer" href="https://klaptools.com/">
              <p className="linkText">Site</p>
            </a>
          </div>
        </div>
        <h1>Project Purpose and Goal</h1>
        <p>
          For this website the goal was to desing and create an ecommerce where
          they could sell their products, with users, reviews, and various
          payment methods.
          <br />
          With the team of Klap Tools we came to the conclusion that Wordpress
          would be the best option.
        </p>
        <img className="projectImage" src={aboutUs} alt="project preview" />
        <img className="projectImage" src={register} alt="project preview" />
        <img className="projectImage" src={services} alt="project preview" />
        <img className="projectImage" src={myAccount} alt="project preview" />
      </div>
      <Footer />
    </div>
  );
};

export default KlapTools;
