import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      Main Menu <hr />
      <NavLink to="/">Home Page</NavLink>
      <br />
      <br />
      <NavLink to="/citystreet">Find City and streets</NavLink>
    </div>
  );
}

export default Menu;
