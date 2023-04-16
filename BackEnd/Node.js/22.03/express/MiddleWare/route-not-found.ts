// importation
import { Request, Response, NextFunction, request } from "express";
// error -> model
import { RouteNotFoundError } from "../Models/client-errors";

// middleware function
const ErrorHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const err = new RouteNotFoundError(request.originalUrl);
  // the route that the user is trying to reach and is not found.
  // For example: http://localhost:8080/api/v2/killMatan - a route that doesn't exist.
  next(err);
};

export default ErrorHandler;
// http://localhost:8080/api/v2/killMatan
