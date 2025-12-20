import React from "react";
import { NavLink } from "react-router";
import {  } from "@ant-design/icons";

const Header = () => {
  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/">
        <span>Home</span>
      </NavLink>

      <NavLink to="registration">
        <span>Registration/Login</span>
      </NavLink>

      {/* <NavLink to="booking">
        <span>Booking</span>
      </NavLink> */}

      <NavLink to="listpage">
        <span>Trips list page</span>
      </NavLink>

      <NavLink to="tripshistory">
        <span>Trips history</span>
      </NavLink>

      <NavLink to="settings">
        <span>Settings</span>
      </NavLink>

      <NavLink to="test">
        <span>Test</span>
      </NavLink>
    </nav>
  );
};

export default Header;
