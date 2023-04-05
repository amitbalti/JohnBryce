import { MailOutline, Password } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import { useNavigate } from "react-router-dom";
import "./Login.css";

// const navigate = useNavigate();
// navigate("./register");

function Login(): JSX.Element {
  return (
    <div className="Login Box" style={{ marginTop: 100 }}>
      <Typography variant="h4" className="HeadLine">
        Login
      </Typography>
      <hr />
      <br />
      <MailOutline style={{ fontSize: 40, margin: 10 }} />
      <TextField label="Email" type="email" variant="standard" />
      <br />
      <Password style={{ fontSize: 40, margin: 10 }} />
      <TextField label="Password" type="password" variant="standard" />
      <br /> <br />
      <ButtonGroup variant="contained" fullWidth>
        <Button color="primary" onClick={() => {}}>
          Create notif
        </Button>
        <Button color="primary" onClick={() => {}}>
          Login
        </Button>
        {/* Create Notify */}
      </ButtonGroup>
      <p>
        Don't have account? <br />
        {/* <Link onClick={() => navigate("/register")}>register now!</Link> */}
        <Link>register now!</Link>
      </p>
    </div>
  );
}

export default Login;
