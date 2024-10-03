import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import pagatpat from "../assets/pagatpat.jpg"; // Your logo image
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

function loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);

      console.log("User logged in Successfully");
      alert("User logged in Successfully"); // Alert for successful login

      // Redirect to profile page
      window.location.href = "/Page2";
    } catch (error) {
      console.error("Login Error:", error.message);

      // Alert for error message
      alert(`Error: ${error.message}`);
    }
  };
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-[#59326c] text-white shadow-lg w-full fixed top-0 z-20">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between"></div>
        </div>
      </nav>

      {/* Carousel Background */}
      <div className="opacity-80 absolute inset-0 z-0">
        <Carousel
          autoPlay
          infiniteLoop
          interval={2000}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          className="h-full"
        >
          <div className="h-screen">
            <img
              src={bg1}
              alt="background 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="h-screen">
            <img
              src={bg2}
              alt="background 2"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="h-screen">
            <img
              src={bg3}
              alt="background 3"
              className="object-cover w-full h-full"
            />
          </div>
        </Carousel>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mt-36 container mx-auto p-8 bg-white bg-opacity-80 rounded-lg shadow-lg px-10 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="relative mb-10">
            <img
              src={pagatpat}
              alt="Logo"
              className="ml-32 h-24 w-24 object-cover rounded-full shadow-xl border-4 border-white"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <button
              type="button"
              className="w-1/2 bg-purple-500 text-white font-bold py-2 px-4 mr-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <a href="/CreateAcc/">Create Account</a>
            </button>
            <button
              type="submit"
              className="w-1/2 bg-purple-500 text-white font-bold py-2 px-4 ml-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginpage;
