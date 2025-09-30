import React, { useContext } from "react";
import { NavLink } from "react-router";
import LogoCompo from "../logo/LogoCompo";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { signInUser, logOut, user } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <NavLink to="/">HOME</NavLink>{" "}
      </li>
      <li>
        <NavLink to="about">ABOUT</NavLink>{" "}
      </li>
      <li>
        <NavLink to="dashboard">DASHBOARD</NavLink>{" "}
      </li>
      <li>
        <NavLink to="product">PRODUCT</NavLink>{" "}
      </li>
      <li>
        <NavLink to="contact">CONTACT</NavLink>{" "}
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar h-16 backdrop-blur fixed top-0 left-0 right-0 z-10 bg-blue-500/30 text-blue-500 max-w-7xl mx-auto">
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
        {user ? (
          <>
            <button onClick={handleLogOut}>LogOut</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
