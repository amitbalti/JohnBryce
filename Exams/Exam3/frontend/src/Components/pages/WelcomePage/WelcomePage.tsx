import { NavLink } from "react-router-dom";
import "./WelcomePage.css";

function WelcomePage(): JSX.Element {
  return (
    <div className="WelcomePage">
      <h1>Welcom to our Development Groups Meetings</h1>
      <br />
      <h2>
        <NavLink
          to="/allMeetings"
          style={{
            color: "lightgray",
            border: "1px solid lightgray",
            padding: "20px",
          }}
        >
          For All Meetings
        </NavLink>
      </h2>
      <br />
      <h2>
        <NavLink
          to="/addMeeting"
          style={{
            color: "lightgray",
            border: "1px solid lightgray",
            padding: "20px",
          }}
        >
          Add New Meeting
        </NavLink>
      </h2>
      <br />
    </div>
  );
}

export default WelcomePage;
