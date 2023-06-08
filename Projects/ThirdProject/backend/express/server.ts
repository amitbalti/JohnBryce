// Imports
import cors from "cors"; // npm install cors
import express from "express";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import router from "./Routes/VacationRoutes";
import userRouter from "./Routes/UserRoutes";
import config from "./Utils/Config";
import vacationLogic from "./Logic/VacationsLogic";
import userLogic from "./Logic/UserLogic";
import ErrorHandler from "./MiddleWare/route-not-found";

// Create server
const server = express();

// Handle cors
server.use(cors());

// How we send the data back (JSON, XML, RAW, String)
server.use(express.json());

// Where I will save the vacations
server.use(express.static("vacations"));

// Enable file uploading, and create a path for the files if it not exists
server.use(fileUpload({ createParentPath: true }));

server.use(bodyParser.json());

server.use("/vacations", router);
server.use("/users", userRouter);

// Create our tables if they don't exist
console.log(`check if table exists...`);
vacationLogic.createVacationsTable();
userLogic.createUsersTable();

// Handle errors (route not found)
server.use("*", ErrorHandler);

// Start the server
server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
});
