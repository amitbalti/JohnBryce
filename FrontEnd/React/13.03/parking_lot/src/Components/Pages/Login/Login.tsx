import { AccountBox, Password } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import notify from "../../Utils/Notify/Notify";
import "./Login.css";

function Login(): JSX.Element {
  return (
    <div className="Login Box" style={{ marginTop: 150 }}>
      <Typography variant="h4" className="HeadLine">
        Login
      </Typography>
      <hr />
      <br />
      <br />
      <AccountBox style={{ fontSize: 40, margin: 10 }} />
      <TextField label="User Name" variant="outlined" />
      <br />
      <br />
      <Password style={{ fontSize: 40, margin: 10 }} />
      <TextField label="Password" type="password" variant="outlined" />
      <br />
      <br />
      <Checkbox />
      <label>Remember me</label>
      <br />
      <br />
      <ButtonGroup variant="contained" fullWidth>
        <Button
          color="primary"
          onClick={() => {
            notify.success("You have logged in successfully!");
          }}
        >
          Login
        </Button>
        <Button color="secondary">Register</Button>
      </ButtonGroup>
    </div>
  );
}

export default Login;
