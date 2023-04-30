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
  password: config.mySQLpassword,
  database: config.mySQLdatabase,
});

console.log("We are connected to mySQL");

function execute(sql: string): Promise<any> {
  // Promise have three lifescycles: pending, fullfilled, and rejected.
  return new Promise<any>((resolve, reject) => {
    // execute the sql to mySQL
    conncetion.query(sql, (err, result) => {
      // if there is an error (sql server does not understand the query)
      if (err) {
        reject(err);
        return;
      }
      // no error - report data
      resolve(result);
    });
  });
}

export default {
  execute,
};
