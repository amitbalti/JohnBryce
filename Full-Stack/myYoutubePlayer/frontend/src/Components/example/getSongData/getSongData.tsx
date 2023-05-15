import { useReducer, useState } from "react";
import "./getSongData.css";
import songReducer, { ACTION_TYPES, INITIAL_STATE } from "./SongReducer";

function GetSongData(): JSX.Element {
  // song info: loading, data, error

  // Using the 'SongReducer' - we will not need any of the following:
  //    const [loading, setLoading] = useState(false);
  //    const [songData, setData] = useState({});
  //    const [error, setError] = useState("");

  // Instead we will work with a new hook:
  const [state, dispath] = useReducer(songReducer, INITIAL_STATE); // Will get by default the INTIAL_STATE which was determined in the 'SongReducer'.

  const [songSearch, setSearch] = useState("");

  // When I clicked the button below:
  const handleFetch = () => {
    // setLoading(true); // Once I clicked the button, it's loading.
    // setError(""); // If I had a previous error, I want to reset the error.
    dispath({ type: ACTION_TYPES.FETCH_START });
    fetch("url")
      .then((res) => {
        // setLoading(false);
        return res.json(); // When I get the response, turn it into JSON.
      })
      .then((data) => {
        // The 'data' here represents the res.json()
        // setLoading(false); // Here I am not loading anymore, therefore, 'setLoading(false)'
        // setData(data); // Presenting the data
        dispath({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      })
      .catch((err) => {
        // The 'catch' will recognize the error
        // setLoading(false); // Here I am not loading anymore, therefore, 'setLoading(false)'
        // setError(err); // Setting the error
        dispath({ type: ACTION_TYPES.FETCH_ERROR, payload: err });
      });
  };

  return (
    <div className="getSongData">
      <input
        type="text"
        onKeyUp={(args) => {
          args.currentTarget.value;
        }}
      />
      <button onClick={handleFetch}>
        {state.loading ? "Fetching data..." : "Click for search..."}
      </button>
      <span>{state.error.length > 1 && `Error: ${state.error}`}</span>
    </div>
  );
}

export default GetSongData;
