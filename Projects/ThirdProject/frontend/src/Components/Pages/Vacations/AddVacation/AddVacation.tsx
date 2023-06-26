// import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Vacation from "../../../../Model/Vacation";
import "./AddVacation.css";
import {
  Box,
  Button,
  FilledTextFieldProps,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedTextFieldProps,
  StandardTextFieldProps,
  TextField,
  TextFieldVariants,
  Typography,
} from "@mui/material";
import {
  FlightTakeoff,
  ImageOutlined,
  NoteAltTwoTone,
} from "@mui/icons-material";

import * as React from "react";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePickerMUI from "../../DateRangePickerMUI/DateRangePickerMUI";
import { useState } from "react";

function AddVacation(): JSX.Element {
  const [value, setValue] = useState([null, null]);

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
    <div className="AddVacation">
      <Box className="NavBar" style={{ marginTop: 5 }}>
        <NavLink to="/adminHomePage">Home Page</NavLink> •{" "}
        <NavLink to="/logout">Logout</NavLink>
      </Box>
      <div className="Box" style={{ marginTop: 50 }}>
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

        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Check-in"
            endText="Check-out"
            value={value}
            onChange={(newValue: React.SetStateAction<null[]>) => {
              setValue(newValue);
            }}
            renderInput={(
              startProps: JSX.IntrinsicAttributes & {
                variant?: TextFieldVariants | undefined;
              } & Omit<
                  | FilledTextFieldProps
                  | OutlinedTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >,
              endProps: JSX.IntrinsicAttributes & {
                variant?: TextFieldVariants | undefined;
              } & Omit<
                  | FilledTextFieldProps
                  | OutlinedTextFieldProps
                  | StandardTextFieldProps,
                  "variant"
                >
            ) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider> */}
        {/* <FormControl>
      <DateRangePicker value={value} onChange={setValue} /> 
        </FormControl> */}
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
    </div>
  );
}

export default AddVacation;
