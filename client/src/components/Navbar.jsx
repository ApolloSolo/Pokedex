import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Auth from "../utils/auth.js"

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="text-[#ff2323] z-50 items-center h-20 flex justify-between border-[#ff0000] max-w-[1240px] mx-auto px-4 border-b-2 font-bold fixed left-0 right-0 top-0 bg-slate-800">
      <h1 className="text-3xl ">Pokedex</h1>
      <ul className="hidden md:flex">
        <Link to={"/"}>
          <li className="p-4">Home</li>
        </Link>
        <Link to={"/pokemon"}>
          <li className="p-4">All Mons</li>
        </Link>
        {Auth.loggedIn() ? (
          <>
           <li className="p-4">My Poke</li>
          </>
        ) : (
          <>
          <Link to={"/login"}>
          <li className="p-4">Log In</li>
          </Link>
          <li className="p-4">Register</li>
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
