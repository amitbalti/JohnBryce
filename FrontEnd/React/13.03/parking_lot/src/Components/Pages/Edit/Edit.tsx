import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Edit.css";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import {
  Apartment,
  ContactPhone,
  EmojiTransportation,
  Numbers,
  Person,
  TimeToLeave,
} from "@mui/icons-material";
import { fontSize } from "@mui/system";
import Car from "../../Modal/Car";

function Edit(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const tempCar = new Car("na", "na", "na", 0, 0, 0, 0);
  const [carData, setData] = useState<Car>(tempCar);

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem("parking"));
    const parkingNumber = +params.parkingNumber;
    // console.log("number: ", parkingNumber);

    const singleData = allData.filter(
      (item: Car) => item.parkingNumber === parkingNumber
    );
    // console.log("car data: ", singleData);
    // setData(singleData);
  }, []);
  //   console.log("car data: ", carData);

  // Dealing with forms....

  // להחצין את הספריות של הטיפול בטופס- שנוכל להשתמש בפונקציה
  // useForm

  // The structure of the useForm is permanent
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Car>();

  // handle once the data was sent to me
  const send = (carData: Car) => {
    console.log(carData);
  };

  const requiredTemplate = {
    required: { value: true, message: "שדה זה הינו חובה!" },
  };

  return (
    <div className="Edit Box">
      <Typography variant="h2" className="HeadLine">
        {+params.parkingNumber + " חנייה מספר"}
      </Typography>

      <hr />
      {/* <h3>{carData.carOwner}</h3> */}
      {/* inputs: carNum, carOwner, ownerPhone, ownerFlat, ownerCars, ownerBuilding, parkingNumber */}
      <form onSubmit={handleSubmit(send)}>
        <br />
        <TimeToLeave style={{ fontSize: 40, margin: 10 }} />
        <TextField
          label="Car Number"
          variant="outlined"
          inputProps={{ sx: { color: "white" } }}
          {...register("carNum", {
            required: { value: true, message: "אינעל אבוק, איפה מספר הרכב?" },
            minLength: { value: 3, message: "מספר רכב קצר מידי ינעל" },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.carNum?.message}</span>
        <br />

        <br />
        <Person style={{ fontSize: 40, margin: 10 }} />
        <TextField
          label="Car Owner"
          variant="outlined"
          inputProps={{ sx: { color: "white" } }}
          {...register("carOwner", {
            required: { value: true, message: "למה מי אתה?" },
            min: { value: 5, message: "שם קצר מידי, אתה לא דובי גל" },
          })}
        />

        <br />
        <span className="ErrMsg">{errors.carOwner?.message}</span>
        <br />

        <br />
        <ContactPhone style={{ fontSize: 40, margin: 10 }} />
        <TextField
          label="Owner Phone Number"
          variant="outlined"
          inputProps={{ sx: { color: "white" } }}
          {...register("ownerPhone", requiredTemplate)}
        />
        {/* <input
          type="text"
          placeholder="Car phone number"
          // This is the template to register the value into the register space which is handled when clicking the submit button.
          // The thing between the brackets will give us the value
          {...register("ownerPhone", requiredTemplate)}
        /> */}

        <br />
        <span className="ErrMsg">{errors.ownerPhone?.message}</span>
        <br />

        <br />

        <Apartment style={{ fontSize: 40, margin: 10 }} />
        <TextField
          type="number"
          label="Owner Flat Number"
          variant="outlined"
          inputProps={{ sx: { color: "white" } }}
          {...register("ownerFlat", requiredTemplate)}
        />
        <br />
        <span className="ErrMsg">{errors.ownerFlat?.message}</span>
        <br />

        <br />
        <Numbers style={{ fontSize: 40, margin: 10 }} />
        <TextField
          type="number"
          label="Owner Cars Number"
          variant="outlined"
          inputProps={{ sx: { color: "white" } }}
          {...register("ownerCars", requiredTemplate)}
        />
        <br />
        <span className="ErrMsg">{errors.ownerCars?.message}</span>
        <br />

        <br />
        <EmojiTransportation style={{ fontSize: 40, margin: 10 }} />
        <TextField
          type="number"
          label="Owner Building Number"
          variant="outlined"
          inputProps={{ sx: { color: "white" } }}
          {...register("ownerBuilding", requiredTemplate)}
        />
        <br />
        <span className="ErrMsg">{errors.ownerBuilding?.message}</span>
        <br />

        <input
          type="hidden"
          value={+params.parkingNumber}
          {...register("parkingNumber")}
        />
        <br />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          fullWidth
        >
          <Button color="secondary" type="button">
            ביטול
          </Button>
          <Button color="primary" type="submit">
            שינוי
          </Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default Edit;
