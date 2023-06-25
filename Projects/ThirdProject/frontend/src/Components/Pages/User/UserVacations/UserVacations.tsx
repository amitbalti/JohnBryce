import { useState } from "react";
import "./UserVacations.css";
import SingleVacationUser from "../../Vacations/SingleVacation/SingleVacationUser/SingleVacationUser";
import Vacation from "../../../../Model/Vacation";

function UserVacations(): JSX.Element {
  const [vacation, setVacation] = useState<Vacation[]>([]);

  return (
    <div className="UserVacations Box">
      {vacation.map((item) => (
        <SingleVacationUser key={item.vacationId} vacationData={item} />
      ))}
    </div>
  );
}

export default UserVacations;
