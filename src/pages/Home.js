import Banner from "../components/Banner/Banner";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact/Contact";
import Experimets from "../components/Experiments/Experimets";
import Testing from "../components/testing";
import About from "../components/About/About";
import { useState, useEffect } from "react";
import "./Home.css";
const Home = () => {
  const [showAbout, setShowAbout] = useState(false);

  const aboutHandler = () => {
    setShowAbout(!showAbout);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="home"
      style={{ backgroundImage: `url("/backgrounds/pageBackground.svg")` }}
    >
      {showAbout ? <About aboutHandler={aboutHandler} /> : null}
      <Banner aboutHandler={aboutHandler} />
      <Projects />
      <Experimets />
      <Contact aboutHandler={aboutHandler} />
      <Footer />
      <Testing />
    </div>
  );
};

export default Home;
