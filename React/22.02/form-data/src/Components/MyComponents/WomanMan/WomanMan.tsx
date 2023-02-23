import { useEffect, useState } from "react";
import "./WomanMan.css";

function WomanMan(): JSX.Element {
  const manList = ["Sagi", "Ilan", "Nadav", "Matan", "Alon", "Adam", "Ido"];
  const womanList = ["Maya G.", "Hila", "Lior", "Noam", "Maya B."];
  const actionList = ["will Marry", "will Devorce", "will be friend with"];

  const getRandom = (myArr: any) => {
    return myArr[Math.floor(Math.random() * myArr.length)];
  };

  // useState - will set default value for each of the states.
  const [man, setMan] = useState(getRandom(manList));
  const [woman, setWoman] = useState(getRandom(womanList));
  //     variable   action
  const [myAction, setMyAction] = useState(getRandom(actionList));

  // useEffect - will run random from each state
  useEffect(() => {
    setInterval(() => {
      setMan(getRandom(manList));
      setWoman(getRandom(womanList));
      setMyAction(getRandom(actionList));
    }, 2000);
  }, []);

  return (
    <div className="WomanMan">
      <h1>
        {man} {myAction} {woman}
      </h1>
    </div>
  );
}

export default WomanMan;
