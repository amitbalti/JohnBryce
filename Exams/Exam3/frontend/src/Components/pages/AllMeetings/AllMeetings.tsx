import { useEffect } from "react";
import "./AllMeetings.css";

function AllMeetings(): JSX.Element {
  // useEffect(() => {
  //   //redux
  //   if (youtube.getState().songs.allSongs.length < 1) {
  //     console.log("getting data from backend....");
  //     axios.get("http://localhost:4000/api/v1/videos/all").then((response) => {
  //       youtube.dispatch(downloadSongsAction(response.data));
  //     });
  //     setRefresh(!refresh);
  //   }
  //   if (youtube.getState().categories.categories.length < 1) {
  //     axios
  //       .get("http://localhost:4000/api/v1/videos/allCat")
  //       .then((response) => {
  //         youtube.dispatch(downloadCategoryAction(response.data));
  //       });
  //     setRefresh(!refresh);
  //   }
  //   setRefresh(!refresh);
  // }, []);
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AllMeetings;
