// essential imports for our site
import express, { NextFunction, Response, Request } from "express";
import BankLogic from "../Logic/BankLogic";
import BankActions from "../Models/BankActions";

const router = express.Router();

// Get all bank details
router.get(
  "/allBankAccountDetails",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await BankLogic.getAllBankAccountDetails());
  }
);

router.post(
  "/allAccountOperations",
  async (request: Request, response: Response, next: NextFunction) => {
    const { accountNumber } = request.body;

    response
      .status(200)
      .json(await BankLogic.getAllBankAccountOperations(accountNumber));
  }
);
// Add bank account
router.post(
  "/addBankAccount",
  async (request: Request, response: Response, next: NextFunction) => {
    // get the body, which represents our object
    const newBankAccount = request.body;
    // send the command to mysql
    const result = await BankLogic.addNewAccount(newBankAccount);
    // response to user
    response.status(201).json(result);
  }
);

// Add new operation
router.post(
  "/addNewOperation",
  async (request: Request, response: Response, next: NextFunction) => {
    // get the body, which represents our object
    const newOperation: BankActions = request.body;
    // send the command to mysql
    const result = await BankLogic.addNewOperation(newOperation);
    // response to user
    response.status(201).json(result);
  }
);

export default router;
