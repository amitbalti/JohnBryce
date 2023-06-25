import { useState } from "react";
import Vacation from "../../../../Model/Vacation";
import SingleVacationAdmin from "../../Vacations/SingleVacation/SingleVacationAdmin/SingleVacationAdmin";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function AdminVacations(): JSX.Element {
  const [vacation, setVacation] = useState<Vacation[]>([]);

  return (
    <div className="AdminVacations">
      <Box className="NavBar" style={{ marginTop: 5 }}>
        <NavLink to="/adminHomePage">Home Page</NavLink> •{" "}
        <NavLink to="/logout">Logout</NavLink>
      </Box>
      <div className="Box">
        {vacation.map((item) => (
          <SingleVacationAdmin key={item.vacationId} vacationData={item} />
        ))}
      </div>
    </div>
  );
}

export default AdminVacations;
