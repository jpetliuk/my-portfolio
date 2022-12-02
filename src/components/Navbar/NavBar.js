import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = ({ aboutHandler }) => {
  return (
    <div id="navBarContainer">
      <ul>
        <li>
          <Link to="/">
            <p>back home</p>
          </Link>
        </li>
        <li>
          <p onClick={aboutHandler}>Contact</p>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
