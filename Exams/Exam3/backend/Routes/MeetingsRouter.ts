// essential imports for our site
import express, { NextFunction, Response, Request } from "express";
// import VideoLogic from "../Logic/VideoLogicMySQL";
import MeetingsLogic from "../Logic/MeetingsLogic";
import DevGroup from "../Models/DevGroup";

// REST:
// { videoId, videoURL, videoTitle, videoDescription, videoFile }
// addVideo => POST
// deleteVideo => DELETE
// videoList => GET
// videoSearch => GET
// videoUpdate => PUT

const router = express.Router();

//////////// Development Groups ////////////
// Add group
router.post(
  "/addDevGroup",
  async (request: Request, response: Response, next: NextFunction) => {
    // get the body, which represents our object
    const newDevGroup = request.body;
    // send the command to mysql
    const result = await MeetingsLogic.addDevelopmentGroup(newDevGroup);
    // response to user
    response.status(201).json(result);
  }
);

// Get all devGroups
router.get(
  "/allDevGroup",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await MeetingsLogic.getAllDevelopmentGroups());
  }
);

//////////// Meetings ////////////
// Add Meeting
router.post(
  "/addMeeting",
  async (request: Request, response: Response, next: NextFunction) => {
    // get the body, which represents our object
    const newMeeting = request.body;
    // const group = request.body.id; // create a new DevGroup object
    // group.groupName = newMeeting.groupName; // set the groupName property
    // send the command to mysql
    const result = await MeetingsLogic.addMeeting(newMeeting);
    // const result = await MeetingsLogic.addMeeting(newMeeting, group);
    // response to user
    response.status(201).json(result);
  }
);
// Get all Meetings
router.get(
  "/allMeetings",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await MeetingsLogic.getAllMeetings());
  }
);

// // add song
// router.post(
//   "/addVideo",
//   async (request: Request, response: Response, next: NextFunction) => {
//     // get the body, which represents our object
//     const newSong = request.body;
//     // send the command to mysql
//     const result = await VideoLogic.addSong(newSong);
//     // response to user
//     response.status(201).json(result);
//   }
// );

// // get song by id
// router.get(
//   "/getSong/:id",
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(200).json(await VideoLogic.getSongById(+request.params.id));
//   }
// );

// // delete song by id
// router.delete(
//   "/delete/:id",
//   async (request: Request, response: Response, next: NextFunction) => {
//     const id = +request.params.id;
//     VideoLogic.deleteSong(id);
//     response.status(204).json();
//   }
// );

// // get all songs
// router.get(
//   "/all",
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(202).json(await VideoLogic.getAllSongs());
//   }
// );

// // router.put(
// //   "/update",
// //   async (request: Request, response: Response, next: NextFunction) => {
// //    response.status(202).json(await VideoLogic.updateSong(request.body));
// //   }
// // );

// ////////////// Categories //////////////

// // add new category
// router.get(
//   "/newCat/:catName",
//   async (request: Request, response: Response, next: NextFunction) => {
//     response
//       .status(201)
//       .json(await VideoLogic.addCategory(request.params.catName));
//   }
// );

// // get all categories
// router.get(
//   "/allCat",
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(200).json(await VideoLogic.getAllCategories());
//   }
// );

// // delete category by id
// router.delete(
//   "/deleteCat/:catID",
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(201).json(VideoLogic.deleteCategory(+request.params.catID));
//   }
// );

// // get everything
// router.get(
//   "/",
//   async (request: Request, response: Response, next: NextFunction) => {
//     response.status(200).json("Controller Working!!!");
//   }
// );

export default router;
