import Pilot from "./cls/Pilot";
import FlightAttendant from "./cls/FlightAttendant";
import GroundSteward from "./cls/GroundSteward";
import Passenger from "./cls/Passenger";
import Person from "./cls/Person";

// 1) Pilot
let pilot = new Pilot("Guy", "Balteriski", 15, 123456);
console.log("1) Pilot:" + pilot.print());

console.log("--------------------");

// 2) Flight Attendant

let flightAttendant = new FlightAttendant(
  "Ayelet",
  "Balteriski",
  13,
  "Israel",
  "First Class"
);
console.log("2) Flight Attendant:" + flightAttendant.print());

console.log("--------------------");

// 3) GroundSteward

let groundSteward = new GroundSteward(
  "Simba",
  "Balteriski",
  3,
  "Cyprus",
  "Being a dog"
);
console.log("3) Ground Steward:" + groundSteward.print());

console.log("--------------------");

// 4) Passenger
let passenger1 = new Passenger("Amit", "Balteriski", 318769783);
console.log("4) Passenger 1:" + passenger1.print());

// let amit = new Person("Amit", "Balteriski");
// 'abstract' means that we cannot make instance of abstract classes.
