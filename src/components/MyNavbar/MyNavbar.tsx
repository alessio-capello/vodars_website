import React from "react";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/about2">About2</NavLink>
        <NavLink to="/about3">About3</NavLink>
      </NavMenu>
    </div>
  );
  s;
};

export default MyNavbar;
