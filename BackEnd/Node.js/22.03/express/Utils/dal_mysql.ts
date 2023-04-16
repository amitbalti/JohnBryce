// dal = data abstract layer
import mysql from "mysql";
import config from "./Config";

// creating a connection object
const connection = mysql.createPool({
  host: config.mySQLhost,
  user: config.mySQLuser,
  password: config.mySQLpassword,
  database: config.mySQLdatabase,
});

// console.log("We are connected to mysql");

function execute(sql: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    // connecction and execute the sql command
    connection.query(sql, (err, res) => {
      // if there is an error (sql server doesn't understand the query)
      if (err) {
        reject(err);
        return;
      }
      // no error - report data
      resolve(res);
    });
  });
}

export default {
  execute,
};

// promise have 3 types:
// pending, fullfiled, rejected.
