import "./Footer.css";
import temporary from "../../logo.svg";

const Footer = () => {
  return (
    <div id="footerContainer">
      <h2>JEREMIAS PETLIUK</h2>
      <div className="footerMedia">
        <img src={temporary} />
        <img src={temporary} />
        <img src={temporary} />
      </div>
      <p>© 2022 frontend & design by Jeremias Petliuk.</p>
    </div>
  );
};

export default Footer;
