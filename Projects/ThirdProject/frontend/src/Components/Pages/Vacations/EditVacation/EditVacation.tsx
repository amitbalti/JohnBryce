import { useNavigate, useParams } from "react-router-dom";
import "./EditVacation.css";
import Vacation from "../../../../Model/Vacation";
import { Button, TextField, Typography } from "@mui/material";
import {
  AttachMoney,
  CalendarMonthTwoTone,
  FlightTakeoff,
  ImageOutlined,
  NoteAltTwoTone,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

function EditVacation(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const tempVacation = new Vacation(
    "na",
    "na",
    new Date(),
    new Date(),
    300,
    "na",
    1
  );

  useEffect(() => {});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Vacation>();

  // Handle once the data was sent to me:
  const send = (vacationData: Vacation) => {
    console.log(vacationData);
  };

  return (
    <div className="EditVacation Box" style={{ marginTop: 10 }}>
      <Typography variant="h4" className="HeadLine">
        Edit Vacation
      </Typography>
      <hr />
      <form onSubmit={handleSubmit(send)}>
        <FlightTakeoff style={{ fontSize: 40, margin: 10 }} />
        <TextField
          id="standard-required"
          label="Destination"
          type="text"
          variant="standard"
          required
          {...register("destination", {
            required: {
              value: true,
              message: "Please insert your destination",
            },
            minLength: {
              value: 2,
              message: "Your destination name is too short...",
            },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.destination?.message}</span>
        <br />

        <NoteAltTwoTone style={{ fontSize: 40, margin: 10 }} />
        {/* <StickyNote2TwoTone style={{ fontSize: 40, margin: 10 }} /> */}
        <TextField
          // id="standard-required"
          label="Description"
          type="textarea"
          variant="standard"
          required
          {...register("description", {
            required: { value: true, message: "Please enter description" },
            min: { value: 50, message: "Your description is too short..." },
          })}
        />
        <br />
        {/* /////// CHECK ABOUT ///////*/}

        {/* Check it out - learn more how it works */}
        {/* <TextareaAutosize
        id="standard-required"
        // label="Description"
        // type="text"
        // variant="standard"
        required
      /> */}
        <span className="ErrMsg">{errors.description?.message}</span>
        <br />

        {/* /////// CHECK ABOUT ///////*/}
        <CalendarMonthTwoTone style={{ fontSize: 40, margin: 10 }} />
        <TextField
          style={{ width: 166 }}
          id="standard-required"
          label="Start Date" // CHECK - how to change the label
          type="date"
          variant="standard"
          required
          {...register("startDate", {
            required: {
              value: true,
              message: "You haven't picked a start date...",
            },
            /////// Make Validation that the date
            /////// will not be in the past
            min: {
              value: 50,
              message: "Your start date has already passed...",
            },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.startDate?.message}</span>
        <br />

        {/* /////// CHECK ABOUT ///////*/}
        <CalendarMonthTwoTone style={{ fontSize: 40, margin: 10 }} />
        <TextField
          style={{ width: 166 }}
          id="standard-required"
          label="End Date" // CHECK - how to change the label
          type="date"
          variant="standard"
          required
          {...register("endDate", {
            required: {
              value: true,
              message: "You haven't picked end date...",
            },
            /////// Make Validation that the date
            /////// will not be in the past or
            /////// before the start date
            min: {
              value: 50,
              message: "Your end date has already passed...",
            },
            max: {
              value: 52,
              message: "Your end date can't be before the start date...",
            },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.endDate?.message}</span>
        <br />

        {/* /////// CHECK ABOUT ///////*/}
        <AttachMoney style={{ fontSize: 40, margin: 10 }} />
        <TextField
          id="standard-required"
          label="Price" // CHECK - how to change the label
          type="number"
          variant="standard"
          required
          {...register("price", {
            required: {
              value: true,
              message: "You have to insert the vacation price",
            },
            min: { value: 1, message: "The price can't be empty" },
            max: { value: 5, message: "That's a lot of money dude... 🧐" },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.price?.message}</span>
        <br />

        {/* /////// CHECK ABOUT ///////*/}
        <ImageOutlined style={{ fontSize: 40, margin: 10 }} />
        <TextField
          style={{ width: 160 }}
          id="standard-required"
          label="Cover Image" // CHECK - how to change the label
          type="file"
          variant="standard"
          required
          {...register("img", {
            required: {
              value: true,
              message: "You have to import image",
            },
          })}
        />
        <br />
        <span className="ErrMsg">{errors.img?.message}</span>
        <br />

        {/* /////// CHECK ABOUT ///////*/}
        <Button fullWidth variant="contained" color="primary" type="submit">
          Update Vacation
        </Button>
        <br />
        <Button
          fullWidth
          variant="outlined"
          color="error"
          type="reset"
          style={{ marginTop: 5 }}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}

export default EditVacation;
