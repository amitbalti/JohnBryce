import "./Menu.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { youtube } from "../../Redux/YoutubeStore";
import { Category } from "../../Model/Category";

function Menu(): JSX.Element {
  const [categories, setCategories] = useState<Category[]>(
    youtube.getState().categories.categories
  );

  //   useEffect(() => {
  //     if (localStorage.getItem("Categories")) {
  //       //setCategories(JSON.parse(localStorage.getItem("Categories") as any));
  //     }
  //   }, []);

  youtube.subscribe(() => {
    setCategories(youtube.getState().categories.categories);
  });

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
      {youtube.getState().categories.categories.map((item) => {
        return <h3 key={item.id}>{item.name}</h3>;
      })}
    </div>
  );
}

export default Menu;
