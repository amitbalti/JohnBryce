import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
import { response } from "express";
import DevGroup from "../Models/DevGroup";
import Meetings from "../Models/Meetings";

//////////// One Time Running ////////////
// One time running: create Development Groups table, create Meetings table

const createDevelopmentGroupsTable = () => {
  const SQLcommand = `CREATE TABLE IF NOT EXISTS DevelopmentGroups.groups (
    id INT NOT NULL AUTO_INCREMENT,
    groupName VARCHAR(255) NULL,
    PRIMARY KEY (id));`;
  const response = dal_mysql.execute(SQLcommand);
};

const createMeetingsTable = () => {
  const SQLcommand = `
    CREATE TABLE IF NOT EXISTS DevelopmentGroups.meetings (
        id INT NOT NULL AUTO_INCREMENT,
        startDate DATE NULL,
        startTime TIME NULL, 
        endDate DATE NULL,
        endTime TIME NULL,
        description VARCHAR(255) NULL,
        roomName VARCHAR(255) NULL,
        PRIMARY KEY (id));
      `;
  const response = dal_mysql.execute(SQLcommand);
};

//////////// Development Groups ////////////
// Add Development Group
const addDevelopmentGroup = async (newGroup: DevGroup) => {
  const SQLcommand = `
        INSERT INTO DevelopmentGroups.groups 
        (groupName) 
        VALUES ('${newGroup.groupName}');
    `;
  console.log("sql>", SQLcommand);
  const response: OkPacket = await dal_mysql.execute(SQLcommand); // It will execute the action, it won't return the response.
  const devGroupId = response.insertId;
  console.log("New Id", devGroupId, " Message:", response.message);
  return devGroupId;
};

// Get all Development Groups
const getAllDevelopmentGroups = async () => {
  const SQLcommand = `SELECT * FROM DevelopmentGroups.groups`;
  return await dal_mysql.execute(SQLcommand);
};

//////////// Meetings ////////////
// Add Meeting
const addMeeting = async (newMeeting: Meetings) => {
  const SQLcommand = `
          INSERT INTO DevelopmentGroups.meetings 
          (startDate, endDate, startTime, endTime, description, roomName) 
          VALUES ('${newMeeting.startDate}','${newMeeting.endDate}', '${newMeeting.startTime}', '${newMeeting.endTime}','${newMeeting.description}','${newMeeting.roomName}');
          `;
  // const SQLcommand = `
  // INSERT INTO DevelopmentGroups.meetings
  // (startDate, endDate, startTime, endTime, description, roomName, groupName)
  // VALUES ('${newMeeting.startDate}','${newMeeting.endDate}', '${newMeeting.startTime}', '${newMeeting.endTime}','${newMeeting.description}','${newMeeting.roomName}', groupName);
  // FROM DevelopmentGroups.groups
  // WHERE id = ${group.id}
  // `;
  const result: OkPacket = await dal_mysql.execute(SQLcommand);
  return result.insertId;
};

// Get all Meetings
const getAllMeetings = async () => {
  const SQLcommand = `SELECT * FROM DevelopmentGroups.meetings`;
  return await dal_mysql.execute(SQLcommand);
};

export default {
  createDevelopmentGroupsTable,
  createMeetingsTable,
  addDevelopmentGroup,
  getAllDevelopmentGroups,
  addMeeting,
  getAllMeetings,
};
