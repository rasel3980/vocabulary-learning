import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "./AuthProvider/AuthProvider";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

const Header = () => {
  const {user,handleLogout} = useContext(authContext);
  // console.log(user);
    const Link = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="start learning">Start-Learning</NavLink></li>
    <li><NavLink to="tutorials">Tutorials</NavLink></li>
    <li><NavLink to="/about us">About-Us</NavLink></li>
    {
      user && (
        <li><NavLink to="/profile">My-Profile</NavLink></li>
      )
    }
    </>
  return (
    <>
    <div className="navbar md:px-8 ">
      <div className="navbar-start ">
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
        <NavLink to="/" className="btn btn-ghost text-gray-100 bg-green-500 text-3xl font-extrabold">Lingo Bingo</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold menu-horizontal px-1">
          {
            Link
          }
        </ul>
      </div>
      <div className="navbar-end">
        {
          user && user? (
            <div className="mr-2">
              <NavLink to="/profile"><img className="w-10 rounded-full" src={user?.photoURL} alt="userPhoto" /></NavLink>
            </div>
          )
          :
          (
            <div className="mr-3">
              <FaUser  size={25}></FaUser>
            </div>
          )
        }
        {
          user && user?.email? (<button onClick={handleLogout} className='btn font-bold bg-red-600 text-gray-100'>Logout <FaSignOutAlt></FaSignOutAlt> </button>) :(<NavLink to="/login"><button className="btn text-gray-100 font-bold bg-green-400">Login</button></NavLink>)
          
        }
        
      </div>
    </div>
    </>
  );
};

export default Header;
