import axios from "axios";

axios
  .get("http://localhost:4000/devMeetings/allMeetings") //=>VERB (POST,GET,PUT,DELETE)
  .then((response) => {
    //what to do with response
  })
  .catch((error) => {
    //what to do with error
  });

axios
  .post("http://localhost:4000/devMeetings/addMeeting") //=>VERB (POST,GET,PUT,DELETE)
  .then((response) => {
    //what to do with response
  })
  .catch((error) => {
    //what to do with error
  });
