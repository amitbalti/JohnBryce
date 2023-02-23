import { useState, useEffect } from "react";
import "./Footer.css";

function Footer(): JSX.Element {
  const [myCreator, setNewName] = useState("Default Value");
  // useState - loading it only once, when the component is loaded
  const students = [
    "Alon",
    "Sagi",
    "Lior",
    "Hila",
    "Matan",
    "Nadav",
    "Ilan",
    "Maya",
    "Adam",
    "Maya B",
  ];

  const randomName = () => {
    return students[Math.floor(Math.random() * students.length)];
  };

  // useEffect -
  useEffect(() => {
    setInterval(() => {
      let myName = randomName();
      setNewName(myName);
    }, 1000);
  }, []);

  return <div className="Footer">&copy; {myCreator} 2023</div>;
}

export default Footer;
