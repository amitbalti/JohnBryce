import { NavLink } from "react-router-dom";
import Clock from "../../Pages/Clock/Clock";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>My Vacations</h1>
      <Clock />
      <NavLink to="/">Home Page</NavLink> • <NavLink to="/login">Login</NavLink>{" "}
      • <NavLink to="/about">About Us</NavLink>
      {/* <span className="topRight">
        <NavLink to="/login">Login</NavLink> /{" "}
        <NavLink to="/register">Register</NavLink>
      </span> */}
    </div>
  );
}

export default Header;
