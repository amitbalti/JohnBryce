import WomanMan from "../../MyComponents/WomanMan/WomanMan";
import "./Main.css";
import cake from "../../../assets/cake.jpg";
import Cities from "../../MyComponents/Cities/Cities";
import { SyntheticEvent, useState } from "react";

function Main(): JSX.Element {
  const manList = ["Sagi", "Ilan", "Nadav", "Matan", "Alon", "Adam", "Ido"];
  const womanList = ["Maya G.", "Hila", "Lior", "Noam", "Maya B."];

  // const [victim, setVictim] = useState("Nobody");
  const [groom, setGroom] = useState("");
  const [message, setMessage] = useState("");

  const getRandomName = () => {
    // setVictim(womanList[Math.floor(Math.random() * womanList.length)]);
    let victim = womanList[Math.floor(Math.random() * womanList.length)];
    setMessage(`${groom} wants to marry with ${victim}`);
  };

  const changeName = (args: SyntheticEvent) => {
    let myValue = (args.target as HTMLInputElement).value;
    setGroom(myValue);
  };

  const changeGroomName = (args: SyntheticEvent) => {
    // let myValue = args.target; // acts like an event.
    // let myValue = args.target as HTMLInputElement; // The first action I want it to do - will act like an html input element.
    let myValue = (args.target as HTMLInputElement).value; // The second action - will take the value from the html input element.
    setGroom(myValue); // will set the groom value to myValue - which I defined the line above.
  };

  return (
    <div className="Main">
      {/* <h1>When a man loves a woman</h1>
      <WomanMan />
      <img src={cake} width="150" />
      <Cities /> */}
      <br />
      <br />
      <br />
      {/* <input type="text" onChange={changeName} /> */}
      {/* <input type="text" onChange={changeGroomName} /> */}
      <input
        type="text"
        onChange={(args) => {
          setGroom(args.target.value);
        }}
      />
      <button onClick={getRandomName}>Get Random Victim</button>
      <br />
      <br />
      {/* <div className="Box">Victim name: {victim}</div> */}
      <br />
      <br />
      {message}
    </div>
  );
}

export default Main;
