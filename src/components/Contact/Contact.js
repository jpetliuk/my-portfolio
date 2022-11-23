import "./Contact.css";
import proyector from "../../assets/img/proyector.png";
import ContactImages from "../ContactImages/ContactImages";

const Contact = ({ aboutHandler }) => {
  return (
    <div id="contactContainer">
      <h1>Let's have a chat</h1>
      <div className="contactInformationContainer">
        <div className="contactInformation">
          <a href="mailto: jeremias.petliuk@gmail.com">
            <p>jeremias.petliuk@gmail.com</p>
          </a>
          <div className="contactInformationButton">
            <button onClick={aboutHandler}>get in touch</button>
          </div>
        </div>
        <div className="contanctAnimation">
          <ContactImages />
          <div className="contactProyector">
            <img src={proyector} alt="projector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
