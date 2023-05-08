import { useState } from "react";
import "./getSongData.css";

function GetSongData(): JSX.Element {
  // song info: loading, data, error
  const [loading, setLoading] = useState(false);
  const [songData, setData] = useState({});
  const [error, setError] = useState("");
  const [songSearch, setSearch] = useState("");

  // When I clicked the button below:
  const handleFetch = () => {
    setLoading(true); // Once I clicked the button, it's loading.
    setError(""); // If I had a previous error, I want to reset the error.
    fetch("url")
      .then((res) => {
        setLoading(false);
        return res.json(); // When I get the response, turn it into JSON.
      })
      .then((data) => {
        // The 'data' here represents the res.json()
        setLoading(false); // Here I am not loading anymore, therefore, 'setLoading(false)'
        setData(data); // Presenting the data
      })
      .catch((err) => {
        // The 'catch' will recognize the error
        setLoading(false); // Here I am not loading anymore, therefore, 'setLoading(false)'
        setError(err); // Setting the error
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
        {loading ? "Fetching data..." : "Click for search..."}
      </button>
      <span>{error.length > 1 && `Error: ${error}`}</span>
    </div>
  );
}

export default GetSongData;
