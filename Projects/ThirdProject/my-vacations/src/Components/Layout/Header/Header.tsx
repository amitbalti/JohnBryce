import Clock from "../../Pages/Clock/Clock";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>Balti's Vacations</h1>
      <Clock />
    </div>
  );
}

export default Header;
