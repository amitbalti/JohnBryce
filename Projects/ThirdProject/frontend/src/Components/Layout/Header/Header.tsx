import { NavLink } from "react-router-dom";
import Clock from "../../Pages/Clock/Clock";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>My Vacations</h1>
      <Clock />
      <NavLink to="/allVacations">Home Page</NavLink> •{" "}
      <NavLink to="/about">About Us</NavLink>
    </div>
  );
}

export default Header;
