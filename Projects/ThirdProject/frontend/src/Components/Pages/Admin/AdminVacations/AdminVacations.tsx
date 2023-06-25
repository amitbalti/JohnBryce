import { useState } from "react";
import Vacation from "../../../../Model/Vacation";
import SingleVacationAdmin from "../../Vacations/SingleVacation/SingleVacationAdmin/SingleVacationAdmin";

function AdminVacations(): JSX.Element {
  const [vacation, setVacation] = useState<Vacation[]>([]);

  return (
    <div className="AdminVacations Box">
      {vacation.map((item) => (
        <SingleVacationAdmin key={item.vacationId} vacationData={item} />
      ))}
    </div>
  );
}

export default AdminVacations;
