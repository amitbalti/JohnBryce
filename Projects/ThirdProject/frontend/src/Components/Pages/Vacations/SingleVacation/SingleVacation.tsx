import { useNavigate } from "react-router-dom";
import Vacation from "../../../../Model/Vacation";
import "./SingleVacation.css";

interface vacationProps {
  vacationData: Vacation;
}

function SingleVacation(props: vacationProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="SingleVacation Box">
      {/* <button>
        {user ? props.vacationData.liked : props.vacationData.unlike}
      </button> */}
      <img src={props.vacationData.img} />
      <h3>{props.vacationData.destination}</h3>
      <hr />
      {/* <h4>
        {props.vacationData.startDate}-{props.vacationData.endDate}
      </h4> */}
      <p>{props.vacationData.description}</p>
      <button>{props.vacationData.price}$</button>
    </div>
  );
}

export default SingleVacation;
