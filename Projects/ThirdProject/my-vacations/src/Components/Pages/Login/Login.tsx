import { MailOutline, Password } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import notify from "../../Utils/Notify/Notify";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="Login Box" style={{ marginTop: 100 }}>
      <Typography variant="h4" className="HeadLine">
        Login
      </Typography>
      <hr />
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
