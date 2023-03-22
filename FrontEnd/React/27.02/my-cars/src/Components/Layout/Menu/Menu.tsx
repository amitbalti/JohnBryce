import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
  return (
    <div className="Menu">
      Main Menu <hr />
      <NavLink to="/">Home Page</NavLink>
      <br />
      <br />
      <NavLink to="/car">Find Car</NavLink>
      <br />
      <br />
      <NavLink to="/bike">Find Bike</NavLink>
      <br />
      <br />
      <NavLink to="/truck">Find Truck</NavLink>
      <br />
      <br />
      <NavLink to="/handicap">Find HandiCap</NavLink>
      <br />
      <br />
      <NavLink to="/offroad">Find Off Road</NavLink>
      <br />
      <br />
      <NavLink to="/addnew">
        <h2>Add New vehicle</h2>
      </NavLink>
    </div>
  );
}

export default Menu;
