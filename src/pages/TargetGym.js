import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./ProjectStyle.css";
import { useEffect } from "react";

const TargetGym = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Link to="/">
        <button>volver</button>
      </Link>
      <div className="projectContainer">
        <h1>TargetGym</h1>
        <p>assadasdaf</p>
        <img
          className="projectImage"
          src="https://media.wired.com/photos/5f9ca518227dbb78ec30dacf/16:9/w_2400,h_1350,c_limit/Gear-RIP-Google-Music-1194411695.jpg"
          alt="project preview"
        />
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
              href="https://github.com/jpetliuk"
            >
              <p className="linkText">Github</p>
            </a>
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
      </div>
      <Footer />
    </>
  );
};

export default TargetGym;
