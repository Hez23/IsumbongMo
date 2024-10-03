import React, { useState } from "react";
import pagatpat from "../assets/pagatpat.jpg";
import navigation from "../assets/navigation.png";
import StatisticsChart from "../WebBarangayComponents/Charts"; // Import the chart

function Page2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-[#59326c] text-white">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left Side - User Icon and Dropdown */}
            <div className="flex items-center space-x-4 mr-auto">
              <div className="relative">
                <button className="focus:outline-none" onClick={toggleDropdown}>
                  <img src={navigation} alt="User" className="h-6 w-6" />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <a
                      href="/Profile/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <a
                      href="/EditProfile/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Edit Profile
                    </a>
                    <a
                      href="/Loginpage/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex flex-grow justify-center text-white">
              <div className="relative">
                <a
                  href="/Reports/"
                  className="mr-36 font-bold font-mono text-xl hover:text-gray-500"
                >
                  Reports
                </a>
                <span className="absolute -top-2 -right-0.5 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1">
                  5
                </span>
              </div>
              <a
                href="#"
                className="ml-36 font-bold font-mono text-gray-500 text-xl hover:text-gray-500"
              >
                Dashboard
              </a>
            </div>

            {/* Right Side - Logo */}
            <div className="logo ml-auto">
              <img
                src={pagatpat}
                alt="Logo"
                className="h-14 w-14 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Add the Statistics Chart below the nav */}
      <div className="mt-8 max-w-5xl mx-auto">
        <StatisticsChart />
      </div>
    </>
  );
}

export default Page2;
