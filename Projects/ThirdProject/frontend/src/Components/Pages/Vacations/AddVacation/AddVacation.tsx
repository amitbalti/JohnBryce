// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Vacation from "../../../../Model/Vacation";
import "./AddVacation.css";

function AddVacation(): JSX.Element {
  const navigate = useNavigate();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Vacation>();

  const send = (userData: Vacation) => {
    let vacations: Vacation[] = [];
    console.log(userData);
    // const vacationIdentifier = userData.
    // axios.get().then(response)=>{}
  };
  return (
    <div className="AddVacation">
      <h1>Add Vacation</h1>
    </div>
  );
}

export default AddVacation;
