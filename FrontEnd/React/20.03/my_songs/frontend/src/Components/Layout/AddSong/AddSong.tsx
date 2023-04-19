import { Button, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cat from "../../../Model/Cat";
import Song from "../../../Model/Song";
import "./AddSong.css";
import Category from "../../../Model/Category";

function AddSong(): JSX.Element {
  const apiKey = "AIzaSyCmnsJKtqLArOWjrLqhV3FBvIJ5GEE6lYY";
  const [songImg, setImg] = useState("");
  const [songName, setSongName] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Song>();

  const send = async (userData: Song) => {
    console.log(userData);
    // Working with google cloud :)
    const songIdentifier = userData.url.split("=")[1];
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${songIdentifier}&fields=items(id%2Csnippet)&key=${apiKey}`
      )
      .then(async (response) => {
        console.log(response);
        setImg(response.data.items[0].snippet.thumbnails.default.url);
        setSongName(response.data.items[0].snippet.title);
        userData.songImg =
          response.data.items[0].snippet.thumbnails.default.url;
        userData.songName = response.data.items[0].snippet.title;
        console.log(userData);
        try {
          const response = await fetch(
            "http://localhost:8080/api/v1/videos/addVideo",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                url: userData.url,
                songName: userData.songName,
                songImg: userData.songImg,
                category: +userData.category,
                videoFile: userData.videoFile,
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to add song");
          }

          alert("Song added successfully!");
        } catch (error) {
          console.error(error);
          alert("Failed to add song");
        }
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
          {cat.allCat().map((item: Category) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
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
