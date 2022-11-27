import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navBarContainer">
      <ul>
        <Link to="/">
          <p>back home</p>
        </Link>
        <p>Contact</p>
      </ul>
    </div>
  );
};

export default NavBar;
