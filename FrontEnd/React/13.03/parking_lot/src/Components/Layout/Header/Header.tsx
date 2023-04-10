import { NavLink } from "react-router-dom";
import "./Header.css";
import { store } from "../../Redux/store";
import { useState } from "react";

function Header(): JSX.Element {
  const [totalCar,setTotal] = useState(0);
  // store.subscribe(()=>{
  //   setTotal(store.getState().CarState.cars.length);
  // })


  return (
    <div className="Header">
      <h1>גאולה כהן 6-8 מצבת רכבים וחניות</h1>
      <NavLink to="/"> דף הבית </NavLink> |
      <NavLink to="/parkingList"> רשימת חניות </NavLink> |
      <NavLink to="/about"> אודות </NavLink> |
      <span> Total cars: {store.getState().CarState.cars.length}</span>
    </div>
  );
}

export default Header;
