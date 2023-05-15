// dal = data abstract layer
// All the actions I am making in mySQL, will go trough this file.
// The dal will make sure to connect me to mySQL itself.

// first - npm i mysql @types/mysql
import mysql from "mysql";
import config from "./Config";

// creating a connection object - every time I want to connect to mySQL, I will open a new connection
const conncetion = mysql.createPool({
  // the base is 10 conncetions
  // in the 'createPool' I am creating a type of queue of requests that mySQL is managing and not me.
  host: config.mySQLhost,
  user: config.mySQLuser,
  password: config.mySQLpass,
  database: config.mySQLdatabase,
});

// console.log("We are connected to mySQL");

const execute = (sql: string): Promise<any> => {
  // I am using Promise because I don't know how long it is going to take for us to get data, if any.
  // Promise have three lifescycles: pending, fullfilled, and rejected.
  return new Promise<any>((resolve, reject) => {
    // execute the sql to mySQL
    // connection and execute the sql command

    conncetion.query(sql, (err, result) => {
      // the query receive 'sql' but returns or 'err' or 'result'

      // if there is an error (sql server does not understand the query)
      if (err) {
        reject(err);
        return;
      }
      // no error - report data
      resolve(result);
    });
  });
};

export default {
  execute,
};
