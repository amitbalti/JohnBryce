import { MailOutline, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import notify from "../../Utils/Notify/Notify";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  return (
    <div className="Login Box" style={{ marginTop: 100 }}>
      <Typography variant="h4" className="HeadLine">
        Login
      </Typography>
      <hr />
      <br />
      <FormControl>
        <InputLabel htmlFor="email" required>
          Email address
        </InputLabel>
        <Input
          id="my-input"
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
      <FormControl sx={{ m: 1, width: "25ch" }} variant="standard" required>
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
      <br /> <br />
      <ButtonGroup variant="contained" fullWidth>
        <Button
          color="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </Button>
        {/* <Button
          color="primary"
          onClick={() => {
            notify.success("You have logged in successfully!");
          }}
        >
          Login
        </Button> */}
      </ButtonGroup>
      <p>
        Don't have account? <br />
        <Button sx={{ fontSize: 12 }} onClick={() => navigate("/register")}>
          register now!
        </Button>
      </p>
    </div>
  );
}

export default Login;
