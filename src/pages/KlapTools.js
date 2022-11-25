import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./ProjectStyle.css";

const KlapTools = () => {
  return (
    <>
      <Link to="/">
        <button>volver</button>
      </Link>
      <div className="projectContainer">
        <h1>TargetGym</h1>
        <p>assadasdaf</p>
        <div className="projectRelevantInfo">
          <div>
            <h1>Type</h1>
            <p>sdsada</p>
          </div>
          <div>
            <h1>Tools</h1>
            <p>asdad</p>
          </div>
          <div>
            <h1>Live</h1>
            <p>asd</p>
          </div>
        </div>
        <img
          className="projectImage"
          src="https://media.wired.com/photos/5f9ca518227dbb78ec30dacf/16:9/w_2400,h_1350,c_limit/Gear-RIP-Google-Music-1194411695.jpg"
          alt="project preview"
        />
        <h1>Project Purpose and Goal</h1>
        <p>afadjfaodfaiofdsiofdfisdfspid</p>
      </div>
      <Footer />
    </>
  );
};

export default KlapTools;
