import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <NavLink to="/">
        <h1>My Youtube Player</h1>
      </NavLink>
    </div>
  );
}

export default Header;
