// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Vacation from "../../../../Model/Vacation";
import "./AddVacation.css";
import { Button, TextField, Typography } from "@mui/material";
import {
  AttachMoney,
  CalendarMonthTwoTone,
  FlightTakeoff,
  ImageOutlined,
  NoteAltTwoTone,
} from "@mui/icons-material";

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
    <div className="AddVacation Box" style={{ marginTop: 50 }}>
      <Typography variant="h4" className="HeadLine">
        Add New Vacation
      </Typography>
      <hr />
      <FlightTakeoff style={{ fontSize: 40, margin: 10 }} />
      <TextField
        id="standard-required"
        label="Destination"
        type="text"
        variant="standard"
        required
      />
      <br />
      <NoteAltTwoTone style={{ fontSize: 40, margin: 10 }} />
      {/* <StickyNote2TwoTone style={{ fontSize: 40, margin: 10 }} /> */}
      <TextField
        // id="standard-required"
        label="Description"
        type="textarea"
        variant="standard"
        required
      />
      {/* <StyledTextarea maxRows={4} aria-label="maximum height" required /> */}

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
      />
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
      />
      <br />

      {/* /////// CHECK ABOUT ///////*/}
      <AttachMoney style={{ fontSize: 40, margin: 10 }} />
      <TextField
        id="standard-required"
        label="Price" // CHECK - how to change the label
        type="number"
        variant="standard"
        required
      />
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
      />
      <br />

      {/* /////// CHECK ABOUT ///////*/}
      {/* <ButtonGroup> */}
      <Button fullWidth variant="contained" color="primary">
        Add Vacation
      </Button>
      <br />
      <br />
      <Button fullWidth variant="outlined" color="error">
        Cancel
      </Button>
      {/* </ButtonGroup> */}
    </div>
  );
}

export default AddVacation;
