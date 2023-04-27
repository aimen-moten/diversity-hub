import React, { useEffect, useState } from 'react';
import logo from "./Logo.png"
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const isToken = localStorage.getItem("auth")

  const onLogoutHandler=()=>{
    localStorage.removeItem("auth")
    navigate("/")
  }

  const onNavClick = () => {
      setIsClicked(false);
  };

  useEffect(()=>{

  },[])

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 sticky top-0 bg-[#F8F8F8]  transition-all shadow-sm shadow-[#00000062]">
      <NavLink to={"/"} className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <img src={logo} className="w-100 h-10 mr-2" alt="Logo" />
      </NavLink>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow  lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="text-sm lg:flex-grow flex justify-around flex-col md:flex-row">
          <NavLink onClick={onNavClick} to={"/"} className="md:hover:text-[royalblue] block mt-4 lg:inline-block lg:mt-0 font-semibold text-md hover:text mr-4">
            Home
          </NavLink>
          <NavLink onClick={onNavClick} to={"/about"} className="md:hover:text-[royalblue] block mt-4 lg:inline-block lg:mt-0 font-semibold text-md text-white-200 mr-4">
            About Us
          </NavLink>
          <NavLink onClick={onNavClick} to={"/communities"} className="md:hover:text-[royalblue] block mt-4 lg:inline-block lg:mt-0 font-semibold text-md text-white-200 mr-4">
            Community
          </NavLink>
          <NavLink onClick={onNavClick} to={"/jobs"} className="md:hover:text-[royalblue] block mt-4 lg:inline-block lg:mt-0 font-semibold text-md text-white-200 mr-4">
            Find work
          </NavLink>
          <NavLink onClick={onNavClick} to={"/mentors"} className="md:hover:text-[royalblue] block mt-4 lg:inline-block lg:mt-0 font-semibold text-md text-white-200 mr-4">
            Mentors
          </NavLink>
        </div>
        <div>
          {
            isToken ? <div onClick={onLogoutHandler} className=' cursor-pointer inline-flex items-center md:mt-0 mt-4 bg-[royalblue] border-0 py-2 px-4 rounded-md text-white'>Logout</div>
              : <NavLink to={"/signin"} className="inline-flex items-center md:mt-0 mt-4 bg-[royalblue] border-0 py-2 px-4 rounded-md text-white">
                Signin
              </NavLink>
          }
        </div>
      </div>
    </nav>
  );
}
