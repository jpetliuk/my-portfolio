import "./Contact.css";
import proyector from "../../assets/img/proyector.png";
import ContactImages from "../ContactImages/ContactImages";

const Contact = () => {
  return (
    <div id="contactContainer">
      <h1>Let's have a chat</h1>
      <div className="contactInformationContainer">
        <div className="contactInformation">
          <p>jeremias.petliuk@gmial.com</p>
          <button>get in touch</button>
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
