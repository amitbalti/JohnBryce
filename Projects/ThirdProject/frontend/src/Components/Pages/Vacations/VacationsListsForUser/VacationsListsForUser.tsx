import { useNavigate } from "react-router-dom";
import "./VacationsListsForUser.css";
import {
  ButtonGroup,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import {
  NoteAltTwoTone,
  StickyNote2TwoTone,
  FlightTakeoff,
  CalendarMonthTwoTone,
  AttachMoney,
  ImageOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { Radio } from "@mui/material";

function VacationsListsForUser(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="VacationsListsForUser Box" style={{ marginTop: 50 }}>
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

      {/* /////// CHECK ABOUT ///////*/}

      {/* Check it out - learn more how it works */}
      {/* <TextareaAutosize
        id="standard-required"
        // label="Description"
        // type="text"
        // variant="standard"
        required
      /> */}
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

export default VacationsListsForUser;
