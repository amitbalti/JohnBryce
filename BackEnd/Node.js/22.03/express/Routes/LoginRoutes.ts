// Neccessary imports for our site
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";

const loginRouter = express.Router();

loginRouter.post(
  "login",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("Login user");
    response.status(200).json("{ 'msg':'User was loged in' }");
  }
);

loginRouter.post(
  "register",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("Register user");
    response
      .status(201)
      .json("{ 'msg':'User was registered, Welcome new user!' }");
  }
);

loginRouter.delete(
  "deleteUser/:userId",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("Deleter user");
    response.status(201).json("{ 'msg':'User was deleted' }");
  }
);

loginRouter.put(
  "updateUser/:userId",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("Update user");
    response.status(202).json("{ 'msg':'your user was updated' }");
  }
);

export default loginRouter;
