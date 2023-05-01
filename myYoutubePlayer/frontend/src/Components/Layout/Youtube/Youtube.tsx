import { useNavigate } from "react-router-dom";
import SingleItem from "./SingleItem/SingleItem";
import "./Youtube.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { youtube } from "../../Redux/YouTubeStore";
import { downloadSongAction } from "../../Redux/SongReducer";
import { downloadCategoryAction } from "../../Redux/CategoriesReducer";

function Youtube(): JSX.Element {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    //redux
    if (youtube.getState().songs.allSongs.length < 1) {
      console.log("getting data from backend....");
      axios.get("http://localhost:4000/api/v1/videos/all").then((response) => {
        youtube.dispatch(downloadSongAction(response.data));
      });
      setRefresh(!refresh);
    }
    if (youtube.getState().categories.categories.length < 1) {
      axios
        .get("http://localhost:4000/api/v1/videos/allCat")
        .then((response) => {
          youtube.dispatch(downloadCategoryAction(response.data));
        });
      setRefresh(!refresh);
    }
    setRefresh(!refresh);
  }, []);

  return (
    <div className="Youtube">
      {youtube.getState().songs.allSongs.map((item) => (
        <SingleItem
          url={item["url"]}
          title={item["title"]}
          description={item["description"]}
          img={item["img"]}
          key={item["title"]}
        />
      ))}
    </div>
  );
}

export default Youtube;
