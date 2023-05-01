import { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <h1>Our Development Groups Meetings</h1>
      <NavLink to="/">Home Page</NavLink> |
      <NavLink to="/allMeetings">All Meetings</NavLink> |
      <NavLink to="/addMeeting">Add New Meeting</NavLink>
    </div>
  );
}

export default Header;
