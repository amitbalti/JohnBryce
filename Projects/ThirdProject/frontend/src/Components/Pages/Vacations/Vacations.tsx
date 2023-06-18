import { useState } from "react";
import "./Vacations.css";
import Vacation from "../../../Model/Vacation";
import SingleVacation from "./SingleVacation/SingleVacation";

function Vacations(): JSX.Element {
  const [vacation, setVacation] = useState<Vacation[]>([]);
  return (
    <div className="Vacations">
      <h1>Vacations List</h1>
      {vacation.map((item) => (
        <SingleVacation key={item.vacationId} vacationData={item} />
      ))}
    </div>
  );
}

export default Vacations;
