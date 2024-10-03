// LoadingScreen.js
import React from "react";
import "./LoadingScreen.css"; // Import CSS for styling

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img
        src="./assets/loadingscreen.gif" // Replace with your GIF URL or path
        alt="Loading..."
        className="loading-gif"
      />
    </div>
  );
};

export default LoadingScreen;
