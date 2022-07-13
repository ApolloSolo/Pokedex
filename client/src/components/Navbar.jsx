import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Auth from "../utils/auth.js";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [dropdown, setDropdown] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (Auth.loggedIn()) {
      const username = Auth.getProfile();
      setUsername(username.data.username);
    }
  }, []);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <nav className="text-[#ff2323] z-50 items-center h-20 flex justify-between border-[#ff0000] max-w-[1240px] mx-auto px-4 border-b-2 font-bold fixed left-0 right-0 top-0 bg-slate-800">
      <Link to={"/pokemon"}>
        <h1 className="text-3xl hover:scale-105 duration-75">Pokedex</h1>
      </Link>
      <ul className="hidden md:flex items-center">
        <Link to={"/"}>
          <li className="p-4 hover:scale-105 duration-75">Home</li>
        </Link>
        <Link to={"/pokemon"}>
          <li className="p-4 hover:scale-105 duration-75">All Mons</li>
        </Link>
        {Auth.loggedIn() ? (
          <>
          <div className="relative">
          <button
              onClick={handleDropdown}
              id="dropBtn"
              className="h-[25px] min-w-[120px] text-black bg-[#ff2323] font-medium rounded-md px-4 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              {username}{" "}
              <svg
              id="dropArrow"
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div
              className={
                dropdown
                  ? "hidden"
                  : "z-10 absolute right-[8.3px] top-[24px] bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
              }
            >
              <ul
                className="flex flex-col py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
                </li>
                <li onClick={logout} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Sign out 
                </li>
              </ul>
            </div>

          </div>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <li className="p-4 hover:scale-105 duration-75">Login</li>
            </Link>
            <Link to={"/register"}>
              <li className="p-4 hover:scale-105 duration-75">Register</li>
            </Link>
          </>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-600 h-full bg-gray-800 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl  m-4">Pokedex</h1>
        <ul className="uppercase p-4">
          <Link to={"/"}>
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <Link to={"/pokemon"}>
            <li className="p-4 border-b border-gray-600">All Mons</li>
          </Link>
          <li className="p-4 border-b border-gray-600">My Poke</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
