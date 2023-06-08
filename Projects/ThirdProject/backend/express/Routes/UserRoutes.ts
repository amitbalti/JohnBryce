// Neccessary imports for our site
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import UserLogic from "../Logic/UserLogic";
import dal_mysql from "../Utils/dal_mysql";

const userRouter = express.Router();

// Register a new user
userRouter.post(
  "/register",
  async (request: Request, response: Response, next: NextFunction) => {
    const newUser = request.body;
    const userId = await UserLogic.addUser(newUser);
    response.status(201).json({ userId });
  }
);

// Get user by ID
userRouter.get(
  "/getUser/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    const user = await UserLogic.getUserById(id);
    response.status(200).json(user);
  }
);

// Get user by email
userRouter.get(
  "/getUserByEmail/:email",
  async (request: Request, response: Response, next: NextFunction) => {
    const email = request.params.email;
    const user = await UserLogic.getUserByEmail(email);
    if (user) {
      response.status(200).json(user);
    } else {
      response.status(404).json({ error: "User not found" });
    }
  }
);

// Get all users
userRouter.get(
  "/allUsers",
  async (request: Request, response: Response, next: NextFunction) => {
    const users = await UserLogic.getAllUsers();
    response.status(200).json(users);
  }
);

// Login user
userRouter.post(
  "/login",
  async (request: Request, response: Response, next: NextFunction) => {
    const { email, password } = request.body;
    const user = await UserLogic.loginUser(email, password);
    if (user) {
      // Login successful
      response.status(200).json(user);
    } else {
      // Invalid credentials
      response.status(401).json({ error: "Invalid credentials" });
    }
  }
);

export default userRouter;
