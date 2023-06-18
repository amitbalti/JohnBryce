import { useNavigate } from "react-router-dom";
import "./VacationsListsForUser.css";

function VacationsListsForUser(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="VacationsListsForUser Box" style={{ marginTop: 50 }}></div>
  );
}

export default VacationsListsForUser;
