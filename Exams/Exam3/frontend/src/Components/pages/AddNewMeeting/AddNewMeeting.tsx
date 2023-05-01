import { SyntheticEvent, useEffect, useState } from "react";
import "./AddNewMeeting.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DevGroup from "../../../Models/DevGroup";
// import { useForm } from "react-hook-form";
import Meetings from "../../../Models/Meetings";

function AddNewMeeting(): JSX.Element {
  const navigate = useNavigate();
  //   const params = useParams();

  const tempGroup = new DevGroup(1, "UI");
  const [groups, setGroups] = useState<DevGroup>(tempGroup);

  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [roomName, setRoomName] = useState("");

  const [meeting, setMeeting] = useState("");
  const [meetings, setMeetings] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:4000/devMeetings/allMeetings")
  //       .then((res) => setMeetings(res.data));
  //   }, []);

  //   const ourGroups = () => {
  //     let value = groups?.groupName;
  //     setGroups(value);
  //   };

  //   const myMeeting = (args: SyntheticEvent) => {
  //     let value = (args.target as HTMLSelectElement).value;
  //     setMeeting(value);
  //   };
  const apiURL = "http://localhost:4000/devMeetings/";

  const searchMeeting = () => {
    //console.log(songURL.split("=")[1]);
    // const meetingId = Meetings.id;
    axios.get(apiURL).then((response) => {
      setStartDate(
        response.data.items[0].snippet.channelTitle.replace("'", "")
      );
      setStartTime(response.data.items[0].snippet.title.replace("'", ""));
      setEndDate(response.data.items[0].snippet.channelTitle.replace("'", ""));
      setEndTime(response.data.items[0].snippet.channelTitle.replace("'", ""));
      setDescription(response.data.items[0].snippet.thumbnails.medium.url);

      setRoomName(response.data.items[0].snippet.thumbnails.medium.url);
    });
  };

  const addNewMeeting = () => {
    axios
      .post(`http://localhost:4000/devMeetings/addMeeting`)
      .then((res) => navigate("/"));
  };

  //   const send = (meetingData: Meetings) => {
  //     console.log(meetingData);
  //   };

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<Meetings>();

  return (
    <div className="AddNewMeeting">
      <div className="Box">
        <h1>Team Calender</h1>
        <select name="Development Group" value="Development Group" id="">
          <option value="Development Group" disabled selected>
            Select Group Name
          </option>
          {/* {groups?.groupName ? (
            <option value="">{groups?.groupName}</option>
          ) : (
            "No Groups Avilable"
          )} */}
          <option value="">{groups?.groupName}</option>
        </select>
        <br />
        <br />
        <label htmlFor="startDate">Start Date & Time</label>
        <br />
        <input type="datetime-local" name="startDate" id="startDate" />
        <br />
        <br />
        <label htmlFor="endDate">End Date & Time</label>
        <br />
        <input type="datetime-local" name="endDate" id="endDate" />
        <br />
        <br />
        <label htmlFor="desc">Description</label>
        <br />
        <input type="text" name="desc" id="desc" />
        <br />
        <br />
        <label htmlFor="Room">Room Name</label>
        <br />
        <input type="text" name="Room" id="Room" />
        <br />
        <br />
        <input
          type="submit"
          value="Add New Meeting"
          id="submitBtn"
          onClick={addNewMeeting}
        />
      </div>
    </div>
  );
}

export default AddNewMeeting;
