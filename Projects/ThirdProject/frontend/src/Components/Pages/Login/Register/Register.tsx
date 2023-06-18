import {
  SupervisedUserCircle,
  Face,
  Group,
  MailOutline,
  Password,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import notify from "../../../Utils/Notify/Notify";
import "./Register.css";
import React, { useState } from "react";

function Register(): JSX.Element {
  const [isAdmin, setIsAdmin] = useState(false);
  console.log({ isAdmin });
  const handleAdminChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAdmin(event.target.checked);
  };
  const navigate = useNavigate();
  return (
    <div className="Register Box" style={{ marginTop: 55 }}>
      <Typography variant="h4" className="HeadLine">
        Register
      </Typography>
      <hr />
      <br />
      <Face style={{ fontSize: 40, margin: 10 }} />
      <TextField
        id="standard-required"
        label="First Name"
        type="text"
        variant="standard"
        required
      />
      <br />
      <Group style={{ fontSize: 40, margin: 10 }} />
      <TextField
        id="standard-required"
        label="Surname"
        type="text"
        variant="standard"
        required
      />
      <br />
      <MailOutline style={{ fontSize: 40, margin: 10 }} />
      <TextField
        id="standard-required"
        label="Email"
        type="email"
        variant="standard"
        required
      />
      <br />
      <Password style={{ fontSize: 40, margin: 10 }} />
      <TextField
        id="standard-required"
        label="Password"
        type="password"
        variant="standard"
        required
      />
      <br />
      <FormControlLabel
        label={"Are you an Admin?"}
        control={<Checkbox checked={isAdmin} onChange={handleAdminChange} />}
      ></FormControlLabel>
      <br /> <br />
      <ButtonGroup variant="contained" fullWidth>
        <Button
          color="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Register
        </Button>
        {/* <Button
          color="primary"
          onClick={() => {
            notify.success("You have registered successfully!");
          }}
        >
          Register
        </Button> */}
      </ButtonGroup>
      <p>
        Already a member? <br />
        {/* <Link onClick={() => navigate("/register")}>register now!</Link> */}
        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{ fontSize: 12 }}
        >
          Login
        </Button>
      </p>
    </div>
  );
}

export default Register;