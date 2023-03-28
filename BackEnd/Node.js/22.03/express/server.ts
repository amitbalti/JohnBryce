// Imports
import cors from "cors"; /// npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import router from "./Routes/VideoRoutes";
import loginRouter from "./Routes/LoginRoutes";

// Create server
const server = express();

// Handle cors
server.use(cors());

// How we send the data back (JSON, XML, RAW, String)
server.use(express.json());

// Where I will save the video files
server.use(express.static("user_videos"));

// Enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true })); // make the option to create father folders.
// fileUpload => zeevik.mp4
// fileUpload => courses/zeevik.mp4

/*
EXAMPLE:
    https://crucialplantation.backendless.app/api/files/ -> this is the endpoint.
    user_videos/                                         -> this is the static directory
    matan_wedding/welcome/cam1/                          -> this is the parent directory
    download.png                                         -> this is the final file....
*/

// Parse the body as JSON for easy work
/* 
    The data will always arrive to me as a string - http - t = text = string.
    I want to make the string into a JSON.
    Meaning - from the client I get the request as a string. To the server I get it as a JSON.
*/
server.use(bodyParser.json());

// How to use the routes
// all videos => route = videoList => full path "api/v1/videos/videoList"
// all videos => http://localhost:3000/api/v1/videos/videoList
server.use("api/v1/videos/", router);
server.use("api/v1/users/", loginRouter);

// Handle errors (route not found)

// Start the server
