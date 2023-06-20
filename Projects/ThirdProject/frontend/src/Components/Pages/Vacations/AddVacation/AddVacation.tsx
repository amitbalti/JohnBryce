// import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Vacation from "../../../../Model/Vacation";
import "./AddVacation.css";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import {
  FlightTakeoff,
  ImageOutlined,
  NoteAltTwoTone,
} from "@mui/icons-material";
import { DateRangePicker } from "rsuite";

import DateRangePickerMUI from "../../DateRangePickerMUI/DateRangePickerMUI";
import { useState } from "react";

function AddVacation(): JSX.Element {
  // const [value, setValue] = useState<Date>([
  //   new Date() || null,
  //   new Date() || null,
  // ]);

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

      <FormControl style={{ margin: 10 }} required>
        <InputLabel htmlFor="destination" required>
          Destination
        </InputLabel>
        <Input
          type="text"
          id="destination"
          aria-describedby="my-helper-text"
          required
          startAdornment={
            <InputAdornment position="start">
              <FlightTakeoff
                style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <FormControl style={{ margin: 10 }} required>
        <InputLabel htmlFor="description" required>
          Description
        </InputLabel>
        <Input
          type="text"
          id="description standard-multiline-static"
          aria-describedby="my-helper-text"
          required
          multiline
          rows={2.5}
          startAdornment={
            <InputAdornment position="start">
              <NoteAltTwoTone
                style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      <br />

      {/* {value != undefined ? (
        <h5>Selected Date - {String(value)}</h5>
      ) : (
        <h5> Please select date </h5>
      )}
      <br />
      <DateRangePicker value={value} onChange={setValue} /> */}
      {/* <DateRangePickerMUI /> */}
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
