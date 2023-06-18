import { NavLink, useNavigate } from "react-router-dom";
import Clock from "../../Pages/Clock/Clock";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <NavLink to="/home">
        <h1 className="HomeHeader">My Vacations</h1>
      </NavLink>
      <Clock />
      <NavLink to="/home">Home Page</NavLink> •{" "}
      <NavLink to="/about">About Us</NavLink>
    </div>
  );
}

export default Header;
