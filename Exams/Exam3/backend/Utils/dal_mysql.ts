// dal = data abstract layer

// first - npm i mysql @types/mysql
import mysql from "mysql";
import config from "./Config";

const conncetion = mysql.createPool({
  // the base is 10 conncetions
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
