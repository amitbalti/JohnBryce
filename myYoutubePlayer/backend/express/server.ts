// imports
import bodyParser from "body-parser";
import cors from "cors"; // npm install cors and npm install @types/cors
import express from "express";
import fileUpload from "express-fileupload";
import router from "./Routes/VideoRoutes";
import loginRouter from "./Routes/LoginRoutes";

// create server
const server = express();

// handle cors
server.use(cors());

// how we send the data back (JSON, XML, RAW, String)
server.use(express.json()); // this means I am working with JSON

// where I will save the video files
// static library meaning - something which is related to all the "shows"
server.use(express.static("user_videos")); // meaning, every time I am uploading a video, upload it to 'user_videos'

// enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true }));
// fileupload => zeevik.mp4
// fileupload => courses/zeevik.mp4 => a library

// parse the body as JSON, for easy work
server.use(bodyParser.json()); // the data that I will get, will come to me as a string, and to use the data it will be transferred as a JSON

// how to use the routes
// full path for all videos => "http://localhost:4000/api/v1/videos/videoList"
server.use("api/v1/videos/", router);
server.use("api/v1/users/", loginRouter);

// handle errors (route not found)

// start the server
