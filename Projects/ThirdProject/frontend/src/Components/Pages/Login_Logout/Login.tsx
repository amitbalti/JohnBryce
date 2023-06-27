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
// import notify from "../../Utils/Notify/Notify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/actions/authActions";
import "./Login.css";

function Login(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log(login(email, password));
    dispatch(login(email, password));
  };

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
          id="email"
          aria-describedby="my-helper-text"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
        <Button color="primary" onClick={handleLogin} type="submit">
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
