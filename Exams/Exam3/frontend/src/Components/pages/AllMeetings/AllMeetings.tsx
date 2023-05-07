import { useEffect, useState } from "react";
import "./AllMeetings.css";
import axios from "axios";
import MeetingInfo from "../../../Models/MeetingInfo";

function AllMeetings(): JSX.Element {
  const [meetings, setMeetings] = useState<MeetingInfo[]>();

  useEffect(() => {
    axios
      .get("http://localhost:4000/devMeetings/allMeetings")
      .then((res) => setMeetings(res.data));
  }, []);

  const niceDate = new Date().toDateString();

  return (
    <div className="AllMeetings">
      <h1>All Meetings</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <td>Development Group</td>
            <td>Start Date & Time</td>
            <td>End Date & Time</td>
            <td>Description</td>
            <td>Room Name</td>
          </tr>
        </thead>
        <tbody>
          {meetings?.map((item) => {
            console.log(item);

            return (
              <tr>
                <td>{item.groupName}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.description}</td>
                <td>{item.roomName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllMeetings;
