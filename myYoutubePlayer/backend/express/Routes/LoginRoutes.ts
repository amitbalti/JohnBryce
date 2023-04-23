import express, { NextFunction, Request, Response } from "express";

const loginRouter = express.Router();

loginRouter.post(
  "/login",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("Login User");
    response.status(200).json(`{ "msg" : "Everything is good" }`);
  }
);

loginRouter.post(
  "/register",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("Register User");
    response.status(201).json(`{ "msg" : "Welcome new user!" }`);
  }
);

loginRouter.delete(
  "/deleteUser/:userId",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("Delete User");
    response
      .status(201)
      .json(`{ "msg" : "User ${+request.params.userId} was deleted" }`);
  }
);

loginRouter.put(
  "/updateUser/:userId",
  async (request: Request, response: Response, next: NextFunction) => {
    console.log("User was updated");
    response
      .status(202)
      .json(`{ "msg" : "User ${+request.params.userId} was updated" }`);
  }
);

export default loginRouter;
