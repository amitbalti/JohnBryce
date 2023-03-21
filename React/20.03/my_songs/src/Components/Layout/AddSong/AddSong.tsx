import { Button, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cat from "../../../Model/Cat";
import Song from "../../../Model/Song";
import "./AddSong.css";

function AddSong(): JSX.Element {
  const apiKey = "AIzaSyBy1Zljo3_APSQWi_cdT7_N8pIYAgW8Q8I";
  const [songImg, setImg] = useState("");
  const [songName, setSongName] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Song>();

  const send = (userData: Song) => {
    let songs: Song[] = [];
    console.log(userData);
    // Working with google cloud :)
    const songIdentifier = userData.url.split("=")[1];
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`
      )
      .then((response) => {
        setImg(response.data.items[0].snippet.thumbnail.default.url);
        setSongName(response.data.items[0].snippet.title);
        userData.songImg = response.data.items[0].snippet.thumbnail.default.url;
        userData.songName = response.data.items[0].snippet.title;
        // console.log(response.data.items[0].snippet);
        console.log(userData);
        // check if we have a key for songs in our localstorage
        // if (localStorage.getItem("songs")) {
        //   // the key exists
        //   console.log("true");
        //   let songs = JSON.parse(localStorage.getItem("songs"));
        //   songs.push(userData);
        //   localStorage.setItem("songs", JSON.stringify(songs));
        // } else {
        //   // we don't have the key
        //   console.log("false");
        //   let songs = [];
        //   songs.push(userData);
        //   localStorage.setItem("songs", JSON.stringify(songs));
        // }
        songs = localStorage.getItem("songs")
          ? JSON.parse(localStorage.getItem("songs"))
          : [];
        songs.push(userData);
        localStorage.setItem("songs", JSON.stringify(songs));
        navigate("/");
      });
  };

  return (
    <div className="AddSong Box">
      <h1>Add New Song</h1>
      <br />
      <form onSubmit={handleSubmit(send)}>
        <TextField
          type="text"
          placeholder="Enter YouTube URL"
          {...register("url")}
        />
        <br />
        <br />
        <Select style={{ width: 200 }} {...register("category")}>
          {cat.allCat().map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
        <br />
        <br />
        <Button type="submit" fullWidth color="success" variant="outlined">
          Add Song
        </Button>
      </form>
      <hr />
      {songImg.length > 3 && <img src={songImg} />}
      <br />
      {songName.length > 3 && <div>{songName}</div>}
      <br />
    </div>
  );
}

export default AddSong;
