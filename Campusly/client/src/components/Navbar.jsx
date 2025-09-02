import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import { Link, Element } from "react-scroll";
function Navbar() {
  return (
    <>
      <nav className="border-b-1 border-gray-200">
        <div className="flex items-center justify-between py-4">
          {/*logo section*/}
          <div className="flex items-center">
            <div className="ml-4">
              <img
                src="./images/campuslylogo.png"
                alt="CampuslyLogo"
                className="h-11 w-auto"
              />
            </div>
            {/*menu section*/}
            <div className="ml-8 hidden md:block">
              <ul className="font-md flex items-center gap-4 text-lg">
                <li className="rounded-xl px-4 py-2 font-semibold text-blue-900 transition duration-300 hover:bg-gray-100">
                  <Link to="section1" duration={500} smooth={true}>
                    Our Features
                  </Link>
                </li>
                <li className="rounded-xl px-4 py-2 font-semibold text-blue-900 transition duration-300 hover:bg-gray-100">
                  For Students
                </li>
                <li className="rounded-xl px-4 py-2 font-semibold text-blue-900 transition duration-300 hover:bg-gray-100">
                  For Facultys
                </li>
              </ul>
            </div>
          </div>
          {/*login & signup section*/}
          <div className="mr-5 flex gap-6">
            <button className="flex cursor-pointer items-center gap-0.5 rounded-full border-2 px-5 py-2">
              <IoLogInOutline size="1.2em" />
              Login
            </button>
            <button className="cursor-pointer rounded-full border-2 bg-blue-500 px-5 py-2 font-extrabold text-white">
              Sign Up
            </button>
          </div>
          {/*mobile hamburger menu section*/}
        </div>
        {/* Mobile sidebar section */}
      </nav>
    </>
  );
}

export default Navbar;
