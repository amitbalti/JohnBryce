// Neccessary imports for our site
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
// import VideoLogic from "../Logic/VideoLogic";
import VideoLogic from "../Logic/VideoLogicMongo";

// REST (have four different methods):
// GET    => www.johnbryce.co.il/login/?user=amit&password=12345                     => up to 256 characters
// POST   => www.johnbryce.co.il/login + body {'user': 'amit', 'password': '12345'} => up to 2gb
// PUT    => like post, but for update.
// DELETE => like get, but for delete.

// add parking slot    => POST
// get parking slot    => GET
// clear parking slot  => DELETE
// update parking slot => PUT

// { videoId, videoURL, videoDescription, videoFile }
// addVideo    => POST ✅
// deleteVideo => DELETE
// videoList   => GET
// videoSearch => GET
// videoUpdate => PUT

const router = express.Router();

// POST - 201 status - created successfully.
router.post(
  "/addVideo", // path
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body;
    console.log("Request Body: ", body);
    response.status(201).json("{ 'msg':'video was uploaded' }"); // POST - 201 status - created successfully.
  }
);

// DELETE - delete succesfuly status - 204
// URL => http://localhost:8080/deleteVideo/5 - will delete video number 5
// URL => http://localhost:8080/deleteVideo/zeev - video not found - 404
// axios.delete("http://localhost:8080/deleteVideo/5") <= react
router.delete(
  "/deleteVideo/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const videoID = +request.params.id || null;
    if (videoID === null || videoID < 1) {
      response.status(404).json("{ 'msg':'Video not found' }");
    }
    console.log("Deleting: ", videoID);
    response.status(204); // DELETE - delete succesfuly status - 204
  }
);

// GET - Getting succesfuly status - 200
router.get(
  "/videoList",
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body;
    console.log("Request Body: ", body);
    response.status(200).json(VideoLogic.videoList()); // GET - Getting succesfuly status - 200
  }
);

// GET - Getting succesfuly status - 200
router.get(
  "/videoSearch",
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body;
    console.log("Request Body: ", body);
    response.status(200).json("{ 'msg':'your video search was received' }"); // GET - Getting succesfuly status - 200
  }
);

// PUT - updating succesfuly status - 200
router.put(
  "/videoUpdate",
  async (request: Request, response: Response, next: NextFunction) => {
    const body = request.body;
    console.log("Request Body: ", body);
    response.status(200).json("{ 'msg':'your video was updated' }"); // PUT - updating succesfuly status - 200
  }
);
