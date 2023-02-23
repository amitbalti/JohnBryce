import { useState, useEffect } from "react";
import "./Header.css";

function Header(): JSX.Element {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  // let time = new Date().toLocaleTimeString();
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="Header">
      <h2>Class - 89</h2>
      The best that lecturer can get
      <h3>{currentTime}</h3>
    </div>
  );
}

export default Header;
