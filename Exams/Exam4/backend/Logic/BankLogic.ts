import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import { response } from "express";
import AccountDetails from "../Models/AccountDetails";

//////////// One Time Running ////////////
// One time running: create Bank Account Details table, create Actions table

// Create the Bank Account Details table
const createBankAccountDetailsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS BankAccounts.accountDetails (
    objectId INT NOT NULL AUTO_INCREMENT,
    accountNumber INT NULL,
    type VARCHAR(45) NULL,
    PRIMARY KEY (objectId));`;
  const response = dal_mysql.execute(SQLcommand);
};

// Create the Actions table
const createActionsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS BankAccounts.accountActions (
    Id INT NOT NULL AUTO_INCREMENT,
    accountNumber INT NULL,
    type VARCHAR(45) NULL,
    sum INT NULL,
    date DATE NULL,
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

// Get all Bank Account Details
// const getAllBankAccountDetails = async () => {
//   const SQLcommand = `
//     SELECT ad.accountNumber, aa.type
//     FROM BankAccounts.accountDetails AS ad
//     JOIN BankAccounts.accountActions AS aa ON ad.accountNumber = aa.accountNumber;
//   `;
//   return await dal_mysql.execute(SQLcommand);
// };

const joinTables = () => {
  const SQLcommand = `
  SELECT *
  FROM BankAccounts.accountDetails AS ad
  JOIN BankAccounts.accountActions AS aa ON ad.accountNumber = aa.accountNumber;`;
  const response = dal_mysql.execute(SQLcommand);
};

// Get all Development Groups
const getAllBankDetails = async () => {
  const SQLcommand = `SELECT * FROM BankAccounts.accountDetails`;
  return await dal_mysql.execute(SQLcommand);
};

const addNewAccount = async (newAction: AccountDetails) => {
  const SQLcommand = `
        INSERT INTO BankAccounts.accountDetails 
        (accountNumber, type)
          VALUES ('${newAction.accountNumber}','${newAction.typeOfAction}');
    `;
  console.log("sql>", SQLcommand);
  const response: OkPacket = await dal_mysql.execute(SQLcommand); // It will execute the action, it won't return the response.
  const BankAccountId = response.insertId;
  console.log("New Id", BankAccountId, " Message:", response.message);
  return BankAccountId;
};

// // Get all Meetings
// const getAllMeetings = async () => {
//   const SQLcommand = `
//     SELECT m.startDate, m.endDate, m.description, m.roomName, g.groupName
//     FROM DevelopmentGroups.meetings m
//     JOIN DevelopmentGroups.groups g ON m.groupId = g.id
//     order by m.startDate asc
//   `;
//   return await dal_mysql.execute(SQLcommand);
// };

export default {
  createBankAccountDetailsTable,
  createActionsTable,
  joinTables,
  getAllBankAccountDetails,
  getAllBankDetails,
  addNewAccount,
};
