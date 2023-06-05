// Neccessary imports for our site
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import VacationsLogic from "../Logic/VacationsLogic";
import dal_mysql from "../Utils/dal_mysql";

const router = express.Router();

// POST - 201 status - created successfully.
router.post(
  "/addVacation",
  async (request: Request, response: Response, next: NextFunction) => {
    // Get the body which represnts our object
    const newVacation = request.body;
    // Send the command to mysql
    const result = await VacationsLogic.addVacation(newVacation);
    // Response to user
    response.status(201).json(result);
  }
);

// DELETE - delete succesfuly status - 204
router.delete(
  "/delete/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    VacationsLogic.deleteVacation(id);
    response.status(204).json();
  }
);

// Get vacation by ID
router.get(
  "/getVacation/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    response
      .status(200)
      .json(await VacationsLogic.getVacationById(+request.params.id));
  }
);

// Get all vacations
router.get(
  "/allVacations",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(202).json(await VacationsLogic.getAllVacations());
  }
);

// Update vacation
router.put(
  "/updateVacation",
  async (request: Request, response: Response, next: NextFunction) => {
    response
      .status(202)
      .json(await VacationsLogic.updateVacation(request.body));
  }
);

export default router;
