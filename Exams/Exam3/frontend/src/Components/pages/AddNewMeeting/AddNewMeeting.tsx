import { SyntheticEvent, useEffect, useState } from "react";
import "./AddNewMeeting.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import DevGroup from "../../../Models/DevGroup";
import Meetings from "../../../Models/Meetings";
import { useForm } from "react-hook-form";

function AddNewMeeting(): JSX.Element {
  const navigate = useNavigate();
  //   const params = useParams();

  const [groups, setGroups] = useState<DevGroup[]>([]);
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = +event.target.value;
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/devMeetings/allDevGroup")
      .then((res) => setGroups(res.data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Meetings>({
    defaultValues: {
      groupId: 0,
    },
  });

  const send = async (meeting: Meetings) => {
    console.log(meeting);
    try {
      const response = await fetch(
        "http://localhost:4000/devMeetings/addMeeting",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(meeting),
        }
      );
      const result = await response.json();
      console.log(result);
      navigate("/allMeetings");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="AddNewMeeting">
      <div className="Box">
        <form onSubmit={handleSubmit(send)}>
          <h1>Team Calender</h1>
          {/* Select Development Group */}
          <select
            {...register("groupId", {
              valueAsNumber: true,
              min: { value: 1, message: "Please select Group" },
            })}
          >
            <option value="0">Select Group Name</option>
            {groups.map((item) => (
              <option value={item.id}>{item.groupName}</option>
            ))}
          </select>
          <br />
          <span className="ErrMsg">{errors.groupId?.message}</span>

          <br />
          <br />

          {/* Select start date */}
          <label htmlFor="startDate">Start Date & Time</label>
          <br />
          <input
            {...register("startDate", {
              required: "Please enter a valid start date",
            })}
            type="datetime-local"
          />
          <br />
          <span className="ErrMsg">{errors.startDate?.message}</span>

          <br />
          <br />

          {/* Select end date */}
          <label htmlFor="endDate">End Date & Time</label>
          <br />
          <input
            {...register("endDate", {
              required: "Please enter a valid end date",
            })}
            type="datetime-local"
          />
          <br />
          <span className="ErrMsg">{errors.endDate?.message}</span>

          <br />
          <br />

          {/* Write description */}
          <label htmlFor="desc">Description</label>
          <br />
          <input
            {...register("description", {
              required: "Please enter description",
            })}
            type="text"
          />
          <br />
          <span className="ErrMsg">{errors.description?.message}</span>

          <br />
          <br />

          {/* Write room name */}
          <label htmlFor="Room">Room Name</label>
          <br />
          <input
            {...register("roomName", {
              required: "Please enter room",
            })}
            type="text"
          />
          <br />
          <span className="ErrMsg">{errors.roomName?.message}</span>

          <br />
          <br />

          {/* Submit button */}
          <input type="submit" value="Add New Meeting" id="submitBtn" />
        </form>
      </div>
    </div>
  );
}

export default AddNewMeeting;
