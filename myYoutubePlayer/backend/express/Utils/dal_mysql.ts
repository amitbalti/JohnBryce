// dal = data abstract layer
// All the actions I am making in mySQL, will go trough this file.
// The dal will make sure to connect me to mySQL itself.

// first - npm i mysql @types/mysql
import mysql from "mysql";
import config from "./Config";

// creating a connection object - every time I want to connect to mySQL, I will open a new connection
const conncetion = mysql.createPool({
  // the base is 10 conncetions
});
