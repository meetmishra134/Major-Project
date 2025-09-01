import React from "react";

function Navbar() {
  return (
    <>
      <nav className="border-b-1 border-gray-200">
        <div className="flex items-center justify-between py-4">
          {/*logo section*/}
          <div className="flex items-center">
            <div className="ml-4">
              <img
                src="./images/logo.png"
                alt="CampuslyLogo"
                className="h-14 w-auto"
              />
            </div>
            {/*menu section*/}
            <div className="ml-8 hidden md:block">
              <ul className="font-md flex items-center gap-4 text-lg">
                <li className="rounded-xl px-4 py-2 font-normal transition duration-300 hover:bg-gray-100">
                  About Us
                </li>
                <li className="rounded-xl px-4 py-2 font-normal transition duration-300 hover:bg-gray-100">
                  Our Features
                </li>
                <li className="rounded-xl px-4 py-2 font-normal transition duration-300 hover:bg-gray-100">
                  For Students
                </li>
                <li className="rounded-xl px-4 py-2 font-normal transition duration-300 hover:bg-gray-100">
                  For Facultys
                </li>
              </ul>
            </div>
          </div>
          {/*login & signup section*/}
          <div className="mr-5 flex gap-6">
            <button className="cursor-pointer rounded-full border-2 px-5 py-2">
              Login
            </button>
            <button className="cursor-pointer rounded-full border-2 bg-gray-400 px-6 py-2 font-extrabold text-white">
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
