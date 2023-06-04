import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import { response } from "express";
import AccountDetails from "../Models/AccountDetails";
import BankActions from "../Models/BankActions";

//////////// One Time Running ////////////
// One time running: create Bank Account Details table, create Actions table

// Create the Bank Account Details table
const createBankAccountDetailsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS BankAccounts.accountDetails (
    objectId INT NOT NULL AUTO_INCREMENT,
    accountNumber INT NULL,
    PRIMARY KEY (objectId));`;
  const response = dal_mysql.execute(SQLcommand);
};

// Create the Actions table
const createActionsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS BankAccounts.accountActions (
    Id INT NOT NULL AUTO_INCREMENT,
    accountNumber INT NULL,
    type VARCHAR(45) NULL,
    amount INT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    interest INT NULL,
    amountOfPayments INT NULL,
    PRIMARY KEY (Id));`;
  const response = dal_mysql.execute(SQLcommand);
};

//////////// Bank Account ////////////
// Get all Bank Account Details
const getAllBankAccountDetails = async () => {
  const SQLcommand = `SELECT * FROM BankAccounts.accountDetails`;
  return await dal_mysql.execute(SQLcommand);
};

const getAllBankAccountOperations = async (accountNumber: number) => {
  const SQLcommand = `SELECT * FROM BankAccounts.accountActions WHERE accountNumber = '${accountNumber}'`;
  return await dal_mysql.execute(SQLcommand);
};

const addNewAccount = async (NewAccount: AccountDetails) => {
  const SQLcommand = `
        INSERT INTO BankAccounts.accountDetails 
        (accountNumber)
          VALUES ('${NewAccount.accountNumber}');
    `;
  console.log("sql>", SQLcommand);
  const response: OkPacket = await dal_mysql.execute(SQLcommand); // It will execute the action, it won't return the response.
  const BankAccountId = response.insertId;
  console.log("New Id", BankAccountId, " Message:", response.message);
  return BankAccountId;
};

const addNewOperation = async (newAction: BankActions) => {
  const SQLcommand = `
        INSERT INTO BankAccounts.accountActions 
        (accountNumber, type, amount, interest, amountOfPayments)
          VALUES ('${newAction.accountNumber}', '${newAction.typeOfAction}',${
    newAction.amount
  }, ${newAction.interest || 0}, ${newAction.amountOfPayments || 0});
    `;
  console.log("sql>", SQLcommand);
  const response: OkPacket = await dal_mysql.execute(SQLcommand); // It will execute the action, it won't return the response.
  const BankAccountId = response.insertId;
  console.log("New Id", BankAccountId, " Message:", response.message);
  return BankAccountId;
};

export default {
  createBankAccountDetailsTable,
  createActionsTable,
  getAllBankAccountDetails,
  getAllBankAccountOperations,
  addNewAccount,
  addNewOperation,
};
