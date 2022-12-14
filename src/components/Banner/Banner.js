import "./Banner.css";
import Particles from "./Particles";
import HomeNavBar from "../Navbar/HomeNavBar";

const Banner = ({ aboutHandler }) => {
  return (
    <div>
      <Particles />
      <HomeNavBar aboutHandler={aboutHandler} />
      <div id="bannerContainer">
        <div className="bannerContent">
          <h1>Hi I'm Jeremias | Frontend Developer</h1>
          <p>Love to learn and create interesting stuff.</p>
          <div className="bannerAbout">
            <button onClick={aboutHandler}>About Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
