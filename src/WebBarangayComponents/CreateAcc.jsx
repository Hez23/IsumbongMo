import pagatpat from "../assets/pagatpat.jpg";
import { auth, db } from "../Firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

export default function CreateAcc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mname, setMname] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        // Store user information in Firestore
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          middleName: mname,
          position: position,
          phoneNumber: phoneNumber,
          idNumber: idNumber,
        });
      }

      // Notify the user of successful registration
      alert("User Registered Successfully!!");
      console.log("User Registered Successfully!!");
    } catch (error) {
      // Handle errors and provide feedback
      console.error("Registration Error:", error.message);
      alert(`Error: ${error.message}`);

      window.location.href = "/Loginpage";
    }
  };
  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-200 to-purple-200 min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-[#59326c] text-white shadow-lg w-full fixed top-0 z-10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Navbar content can go here */}
          </div>
        </div>
      </nav>
      <form onSubmit={handleRegister}>
        {/* Centered Container */}
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl mt-20">
          {" "}
          {/* Adjusted margin to place below the navbar */}
          <div className="flex justify-center mb-10">
            <img
              src={pagatpat}
              alt="Logo"
              className="h-24 w-24 object-cover rounded-full shadow-xl border-4 border-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                First Name:
              </label>
              <input
                type="text"
                id="first-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your first name"
                onChange={(e) => setFname(e.target.value)}
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Last Name:
              </label>
              <input
                type="text"
                id="last-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your last name"
                onChange={(e) => setLname(e.target.value)}
                required
              />
            </div>

            {/* Middle Name */}
            <div>
              <label
                htmlFor="middle-name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Middle Name:
              </label>
              <input
                type="text"
                id="middle-name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your middle name"
                onChange={(e) => setMname(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="position"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Position:
              </label>
              <input
                type="text"
                id="position"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your position"
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>

            {/* ID Number */}
            <div>
              <label
                htmlFor="id-number"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                ID Number:
              </label>
              <input
                type="text"
                id="id-number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your ID number"
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Cellphone Number */}
            <div className="col-span-2">
              <label
                htmlFor="cellphone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Cellphone Number:
              </label>
              <div className="flex">
                <input
                  type="tel"
                  id="cellphone"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[250px]"
                  placeholder="Enter your cellphone number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-1/2 max-w-[200px] bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition duration-300"
            >
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
