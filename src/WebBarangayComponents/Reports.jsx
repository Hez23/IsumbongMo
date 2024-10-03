import React, { useState } from "react";
import pagatpat from "../assets/pagatpat.jpg";
import navigation from "../assets/navigation.png";

function Reports() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <body class="bg-gray-100 min-h-dvh">
      <nav class="bg-[#59326c] text-white">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4 mr-auto">
              <div className="relative">
                <button className="focus:outline-none" onClick={toggleDropdown}>
                  <img src={navigation} alt="User" className="h-6 w-6" />
                </button>

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
            <div class="hidden md:flex flex-grow justify-center space-x-24">
              <a
                href="/Reports/"
                class="mr-36 font-bold font-mono text-gray-300 text-xl hover:text-gray-300"
              >
                Reports
              </a>
              <a
                href="/Page2/"
                class="ml-36 font-bold font-mono text-xl hover:text-gray-300"
              >
                Dashboard
              </a>
            </div>

            <div class="logo ml-auto">
              <img
                src={pagatpat}
                alt="Logo"
                class="h-14 w-14 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      <div class="max-w-full mx-auto min-h-screen bg-white p-6 shadow-md">
        <div class="grid grid-cols-6 gap-4 justify-center">
          <div class="col-span-2 text-center ml-20 mt-10 relative">
            <div class="flex flex-col items-start justify-center space-y-6">
              <a
                href="/Emergency/"
                class="font-bold text-2xl text-gray-400 mb-20"
              >
                Emergency
              </a>
            </div>

            <div class="flex flex-col items-start justify-center space-y-6 relative">
              <a
                href="/Incident/"
                class="font-bold mb-20 text-2xl hover:text-gray-300 relative"
              >
                Incident
              </a>
              <span class="absolute -top-1 -right-10 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </div>

            <div class="flex flex-col items-start justify-center space-y-6 relative">
              <a
                href="/Complain/"
                class="font-bold text-2xl hover:text-gray-300 relative"
              >
                Complain
              </a>
              <span class="absolute -top-1 -right-10 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>

          <div className="col-span-4">
            <div className="space-y-6">
              {[...Array(7)].map((_, index) => (
                <div
                  key={index}
                  className="border-t border-gray-200 py-4 transition-colors hover:bg-gray-50 rounded-lg p-4 shadow-sm"
                >
                  <label className="flex items-center space-x-4">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <span className="text-lg font-medium text-gray-700">
                      Report {index + 1}
                    </span>
                    <span className="text-sm text-gray-500 ml-auto">
                      Date and Time
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Reports;
