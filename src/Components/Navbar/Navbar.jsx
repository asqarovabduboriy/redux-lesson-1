import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container d_flex">
       <NavLink className={"navlink_two"} to={'/'}>
       <div className="navbar">
            <h1>Lesson 1</h1>
          </div>
       </NavLink>
          <NavLink className={"navlink"} to={'/admin'}>
            <div className="logo">
              <h2>A</h2>
            </div>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
