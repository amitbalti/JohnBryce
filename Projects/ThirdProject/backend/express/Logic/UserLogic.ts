import User from "../Models/User";

import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import { response } from "express";

//////////// One Time Running ////////////
// One time running: create Users table

const createUsersTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS myVacations.users (
  userId INT AUTO_INCREMENT,
  userName VARCHAR(255) NOT NULL,
  userMail VARCHAR(255) NOT NULL,
  isAdmin BOOLEAN NOT NULL,
  userPassword VARCHAR(255) NOT NULL,
  PRIMARY KEY (userId)
  );`;
  const response = dal_mysql.execute(SQLcommand);
};

//////////// Users ////////////
// Add new User
const addUser = async (newUser: User) => {
  console.log(newUser);
  const SQLcommand = `
    INSERT INTO myVacations.users 
    (userName, userMail, isAdmin, userPassword) 
    VALUES 
    ('${newUser.userName}', '${newUser.userMail}', ${newUser.isAdmin},${newUser.userPassword});
  `;

  const result: OkPacket = await dal_mysql.execute(SQLcommand);
  return result.insertId;
};

// Login user
const loginUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  const SQLcommand = `SELECT * FROM myVacations.users WHERE userMail = '${email}'`;
  const result: User[] = await dal_mysql.execute(SQLcommand);

  if (result.length > 0) {
    const yourUser: User = result[0];
    const user: User = {
      userId: yourUser.userId,
      userName: yourUser.userName,
      userMail: yourUser.userMail,
      isAdmin: yourUser.isAdmin,
      userPassword: "",
    };

    if (yourUser.userPassword === password) {
      // Passwords match, return the user object
      return user;
    }
  }

  // Invalid credentials or user not found
  return null;
};

// Get user by the user id
const getUserById = async (userId: number) => {
  return dal_mysql.execute(
    `SELECT * FROM myVacations.users WHERE userId = ${userId}`
  );
};

// Get user by email
const getUserByEmail = async (email: string): Promise<User | null> => {
  const SQLcommand = `SELECT * FROM myVacations.users WHERE userMail = '${email}'`;
  const result: User[] = await dal_mysql.execute(SQLcommand);

  if (result.length > 0) {
    const user: User = result[0];
    return user;
  }

  return null;
};

// Get all users
const getAllUsers = async () => {
  const SQLcommand = `SELECT * FROM myVacations.users`;
  return dal_mysql.execute(SQLcommand);
};

export default {
  createUsersTable,
  addUser,
  loginUser,
  getUserById,
  getUserByEmail,
  getAllUsers,
};
