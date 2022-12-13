import "./NavBar.css";
import { Link } from "react-router-dom";
import useWindowDimensions from "./WindowDimensions";
import PhoneNavBarProject from "./PhoneNavBarProject";

const NavBar = ({ aboutHandler }) => {
  const { width } = useWindowDimensions();

  return width > 800 ? (
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
  ) : (
    <PhoneNavBarProject aboutHandler={aboutHandler} />
  );
};

export default NavBar;
