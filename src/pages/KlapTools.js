import Footer from "../components/Footer/Footer";
import "./ProjectStyle.css";
import { useEffect } from "react";
import firstPage from "../assets/img/klap/first-page.png";
import aboutUs from "../assets/img/klap/about-us.png";
import register from "../assets/img/klap/register.png";
import services from "../assets/img/klap/services.png";
import myAccount from "../assets/img/klap/my-account.png";
import NavBar from "../components/Navbar/NavBar";

const KlapTools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="klapToolsContainer"
      style={{ backgroundImage: `url("/backgrounds/pageBackground.svg")` }}
    >
      <NavBar />
      <div className="banner">
        <h1>Klap Tools</h1>
        <p>Music production, mix and mastering.</p>
        <div className="roles">
          <p>
            <span>contex</span> website design
          </p>
          <p>
            <span>role</span> developer and design
          </p>
          <p>
            <span>period</span> early 2022
          </p>
        </div>
      </div>
      <div className="projectContainer">
        <h1>Klap Tools</h1>
        <p>assadasdaf</p>
        <img className="projectImage" src={firstPage} alt="project preview" />
        <div className="projectRelevantInfo">
          <div>
            <h2>Tools</h2>
            <p>Wordpress</p>
          </div>
          <div>
            <h2>Live</h2>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/jpetliuk"
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

export default KlapTools;
