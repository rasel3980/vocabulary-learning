import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const Link = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="start learning">Start-Learning</NavLink></li>
    <li><NavLink to="tutorials">Tutorials</NavLink></li>
    <li><NavLink to="/about us">About-Us</NavLink></li>
    </>
  return (
    <div className="navbar mx-auto">
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
            className="menu menu-sm text-xl font-bold dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
                Link
            }
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-extrabold">Vocabulary Learning</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-lg font-bold menu-horizontal px-1">
          {
            Link
          }
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/login"><button className="btn text-lg font-bold">Login</button></NavLink>
      </div>
    </div>
  );
};

export default Header;
