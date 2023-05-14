import { useNavigate } from "react-router-dom";
import SingleItem from "./SingleItem/SingleItem";
import "./Youtube.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { youtube } from "../../Redux/YoutubeStore";
import { downloadSongsAction } from "../../Redux/SongReducer";

function Youtube(): JSX.Element {
  useEffect(() => {
    //redux
    if (youtube.getState().songs.allSongs.length < 1) {
      axios.get("http://localhost:4000/api/v1/videos/all").then((response) => {
        youtube.dispatch(downloadSongsAction(response.data));
      });
    }
  }, []);

  return (
    <div className="Youtube">
      {/* {youtube.getState().songs.allSongs.map((item) => (
        <SingleItem
          url={item["url"]}
          title={item["title"]}
          description={item["description"]}
          img={item["img"]}
          key={item["title"]}
        />
      ))} */}
    </div>
  );
}

export default Youtube;
