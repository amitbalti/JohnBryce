// Needs to be under Routes folder
// Will handle all possible routes which are being used

// essential imports for our site
import express, { NextFunction, Response, Request } from "express";
import VideoLogic from "../Logic/VideoLogicMySQL";

// REST:
// { videoId, videoURL, videoTitle, videoDescription, videoFile }
// addVideo => POST
// deleteVideo => DELETE
// videoList => GET
// videoSearch => GET
// videoUpdate => PUT

const router = express.Router();

// add song
router.post(
  "/addVideo",
  async (request: Request, response: Response, next: NextFunction) => {
    // get the body, which represents our object
    const newSong = request.body;
    // send the command to mysql
    const result = await VideoLogic.addSong(newSong);
    // response to user
    response.status(201).json(result);
  }
);

// get song by id
router.get(
  "/getSong/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await VideoLogic.getSongById(+request.params.id));
  }
);

// delete song by id
router.delete(
  "/delete/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    VideoLogic.deleteSong(id);
    response.status(204).json();
  }
);

// get all songs
router.get(
  "/all",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(202).json(await VideoLogic.getAllSongs());
  }
);

////////////// Categories //////////////

// add new category
router.get(
  "/newCat/:catName",
  async (request: Request, response: Response, next: NextFunction) => {
    response
      .status(201)
      .json(await VideoLogic.addCategory(request.params.catName));
  }
);

// get all categories
router.get(
  "/allCat",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await VideoLogic.getAllCategories());
  }
);

// delete category by id
router.delete(
  "/deleteCat/:catID",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(201).json(VideoLogic.deleteCategory(+request.params.catID));
  }
);

// get everything
router.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("Controller Working!!!");
  }
);

export default router;
