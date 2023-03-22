import { useEffect, useState } from "react";
import "./Cities.css";

function Cities(): JSX.Element {
  const cityList = [
    "TLV",
    "Raanana",
    "Kfar Saba",
    "Netanya",
    "Ashdod",
    "Jerusalem",
    "Haifa",
  ];
  const recommended = ["recommended", "not recommended"];

  const getRandom = (myArr: any) => {
    return myArr[Math.floor(Math.random() * myArr.length)];
  };

  // useState - will set default value for each of the states.
  const [city, setCity] = useState(getRandom(cityList));
  const [isRecommended, setIsRecommended] = useState(getRandom(recommended));

  // useEffect - will run random from each state
  useEffect(() => {
    setInterval(() => {
      setCity(getRandom(cityList));
      setIsRecommended(getRandom(recommended));
    }, 5000);
  }, []);

  return (
    <div className="Cities">
      <h1>
        The city {city} is really {isRecommended} to visit or live in
      </h1>
    </div>
  );
}

export default Cities;
