import Vacation from "../Models/Vacation";

import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import { response } from "express";

//////////// One Time Running ////////////
// One time running: create Vacations table

const createVacationsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS myVacations.vacations (
    vacationId INT AUTO_INCREMENT PRIMARY KEY,
    destination VARCHAR(255),
    description VARCHAR(255),
    startDate DATE NOT NULL,
    endDate DATE NOT NULL,
    price DECIMAL(10, 2),
    img VARCHAR(255)
  );`;
  const response = dal_mysql.execute(SQLcommand);
};

//////////// Vacations ////////////
// Add new Vacation
const addVacation = async (newVacation: Vacation) => {
  console.log(newVacation);
  const SQLcommand = `
    INSERT INTO myVacations.vacations 
    (destination, description, startDate, endDate, price, img) 
    VALUES 
    ('${newVacation.destination}', '${newVacation.description}', '${newVacation.startDate}','${newVacation.endDate}', ${newVacation.price}, '${newVacation.img}');
  `;
  const result: OkPacket = await dal_mysql.execute(SQLcommand);
  return result.insertId;
};

// Update Vacation using the vacation id
const updateVacation = async (vacation: Vacation) => {
  const SQLcommand = `
  UPDATE myVacations.vacations 
  SET 
  destination = '${vacation.destination}', 
  description = '${vacation.description}', 
  startDate = '${vacation.startDate}', 
  endDate = '${vacation.endDate}', 
  price = ${vacation.price}, 
  img = '${vacation.img}' 
  WHERE 
  (vacationId = ${vacation.vacationId});`;
  await dal_mysql.execute(SQLcommand);
  return true;
};

// Delete Vacation using the vacation id
const deleteVacation = (vacationId: number) => {
  const SQLcommand = `DELETE FROM myVacations.vacations WHERE vacationId = ${vacationId}`;
  dal_mysql.execute(SQLcommand);
  return true;
};

// Get Vacation by the vacation id
const getVacationById = async (vacationId: number) => {
  return dal_mysql.execute(
    `SELECT * FROM myVacations.vacations WHERE vacationId = ${vacationId}`
  );
};

// Get all Vacations
const getAllVacations = async () => {
  const SQLcommand = `SELECT * FROM myVacations.vacations`;
  return dal_mysql.execute(SQLcommand);
};

export default {
  createVacationsTable,
  addVacation,
  updateVacation,
  deleteVacation,
  getVacationById,
  getAllVacations,
};
