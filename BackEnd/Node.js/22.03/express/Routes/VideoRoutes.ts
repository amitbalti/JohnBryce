// Neccessary imports for our site
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
// import VideoLogic from "../Logic/VideoLogic";
import VideoLogic from "../Logic/VideoLogicMYSQL";
import dal_mysql from "../Utils/dal_mysql";

// REST (have four different methods):
// GET    => www.johnbryce.co.il/login/?user=amit&password=12345                     => up to 256 characters
// POST   => www.johnbryce.co.il/login + body {'user': 'amit', 'password': '12345'} => up to 2gb
// PUT    => like post, but for update.
// DELETE => like get, but for delete.

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
    // Get the body which represnts our object
    const newSong = request.body;
    // Send the command to mysql
    const result = await VideoLogic.addSong(newSong);
    // Response to user
    response.status(201).json(result);
  }
);

// DELETE - delete succesfuly status - 204
// URL => http://localhost:8080/deleteVideo/5 - will delete video number 5
// URL => http://localhost:8080/deleteVideo/zeev - video not found - 404
// axios.delete("http://localhost:8080/deleteVideo/5") <= react
router.delete(
  "/delete/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    VideoLogic.deleteSong(id);
    response.status(204).json();
    // When using status code 204 - I will not return any response.
  }
);

// GET - created succesfuly status - 201
router.get(
  "/newCat/:catName",
  async (request: Request, response: Response, next: NextFunction) => {
    // console.log("in video routes");
    // console.log(request.body.catName);
    // const catName = request.body["name"];
    // console.log(catName);
    response
      .status(201)
      .json(await VideoLogic.addCategory(request.params.catName)); // 201 - created
  }
);

// Get song by ID
router.get(
  "/getSong/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await VideoLogic.getSongById(+request.params.id));
  }
);

router.get(
  "/all",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(202).json(await VideoLogic.getAllSongs());
  }
);

// Update song
router.put(
  "/update",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(202).json(await VideoLogic.updateSong(request.body));
  }
);

/////////////////// categories ///////////////////
router.delete(
  "/deleteCat/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    VideoLogic.deleteCategory(+request.params.id);
    response.status(204).json();
  }
);

// Get category by ID
router.get(
  "/getCat/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    response
      .status(200)
      .json(await VideoLogic.getCategoryById(+request.params.id));
  }
);

// Update category
router.put(
  "/updateCat",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(202).json(await VideoLogic.updateCategory(request.body));
  }
);

router.get(
  "/allCat",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await VideoLogic.getAllCategories());
  }
);

router.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("Controller working!");
  }
);

// // GET - Getting succesfuly status - 200
// router.get(
//   "videoSearch",
//   async (request: Request, response: Response, next: NextFunction) => {
//     const body = request.body;
//     console.log("Request Body: ", body);
//     response.status(200).json("{ 'msg':'your video search was received' }"); // GET - Getting succesfuly status - 200
//   }
// );

// // PUT - updating succesfuly status - 200
// router.put(
//   "videoUpdate",
//   async (request: Request, response: Response, next: NextFunction) => {
//     const body = request.body;
//     console.log("Request Body: ", body);
//     response.status(200).json("{ 'msg':'your video was updated' }"); // PUT - updating succesfuly status - 200
//   }
// );

export default router;
