import React from "react";
import { NavLink } from "react-router";
import LogoCompo from "../logo/LogoCompo";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        {" "}
        <NavLink to="/">HOME</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="about">ABOUT</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="dashboard">DASHBOARD</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="product">PRODUCT</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="contact">CONTACT</NavLink>{" "}
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black/30 text-white max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <div className="lg:w-[50px] lg:block md:hidden hidden">
          <LogoCompo></LogoCompo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1"> {navItems}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login">Login</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
