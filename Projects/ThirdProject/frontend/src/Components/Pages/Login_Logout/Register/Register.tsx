import {
  Face,
  Group,
  MailOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import notify from "../../../Utils/Notify/Notify";
import "./Register.css";
import React, { useState } from "react";

function Register(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
      <FormControl style={{ margin: 10 }} required>
        <InputLabel htmlFor="firstName" required>
          First Name
        </InputLabel>
        <Input
          type="text"
          id="firstName"
          aria-describedby="my-helper-text"
          required
          startAdornment={
            <InputAdornment position="start">
              <Face
                style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <FormControl style={{ margin: 10 }} required>
        <InputLabel htmlFor="surname" required>
          Surname
        </InputLabel>
        <Input
          type="text"
          id="surname"
          aria-describedby="my-helper-text"
          required
          startAdornment={
            <InputAdornment position="start">
              <Group
                style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <FormControl style={{ margin: 10 }} required>
        <InputLabel htmlFor="email" required>
          Email Address
        </InputLabel>
        <Input
          type="text"
          id="email"
          aria-describedby="my-helper-text"
          required
          startAdornment={
            <InputAdornment position="start">
              <MailOutline
                style={{ fontSize: 35, marginBottom: 5, color: "purple" }}
              />
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <FormControl
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
        style={{ margin: 10 }}
        required
      >
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <br />
      <FormControlLabel
        style={{ color: "purple" }}
        label={"Are you an Admin?"}
        labelPlacement="top"
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
