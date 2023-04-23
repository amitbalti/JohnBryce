import { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu(): JSX.Element {
  const [categories, setCategories] = useState([]);

  return (
    <div className="Menu">
      <h2>Main Menu</h2>
      <hr />
      <NavLink to="/">All Songs</NavLink>
      <br />
      <br />
      <NavLink to="/addSong">Add Song</NavLink>
      <br />
      <br />
      <NavLink to="/addCategory">Add Category</NavLink>
      <br />
      <br />
      <NavLink to="/search">Search Song</NavLink>
      <br />
      <br />
      <NavLink to="/favorites">Favorites</NavLink>
      <br />
      <br />
      <NavLink to="/about">About Us</NavLink>
      <hr />
      {categories.map((category) => {
        return <h3>{category}</h3>;
      })}
    </div>
  );
}

export default Menu;
