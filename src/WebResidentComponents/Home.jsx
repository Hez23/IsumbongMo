import React, { useState, useEffect } from "react";
import Image from "../assets/image.png";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ref, set, onValue } from "firebase/database";
import { database } from "../Firebase";
import ReportService from "../Quirries";

function Home() {
  const navigate = useNavigate();
  const dbRef = ref(database, "reports");
  const reportService = new ReportService();

  const [formData, setFormData] = useState({
    reportType: "",
    name: "",
    contactNumber: "",
    gps: "",
    reportDescription: "",
    photo: null,
    video: null,
  });

  const [data, setData] = useState(null);
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    if (files.length > 0) {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.reportType)
      newErrors.reportType = "Please select a report type.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.contactNumber)
      newErrors.contactNumber = "Contact number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(false);
      setLoading(true);
      console.log("Form Data Submitted:", formData);

      // Logic for submitting the report to Firebase
      set(dbRef, { ...formData })
        .then(() => {
          setLoading(false);
          setFormSubmitted(true);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setLoading(false);
        });

      // Sending the report to Telegram
      reportService
        .createReport({ ...formData })
        .then((docRef) => {
          console.log(`Report created with id: ${docRef.id}`);
          fetch(
            "https://api.telegram.org/bot7232965650:AAFzKz4wnGFAwWSAVgMOtctD-spz_ie_gys/sendMessage?" +
              new URLSearchParams({
                chat_id: "-1002226647208",
                message_thread_id: "6",
                text: JSON.stringify(formData),
              })
          )
            .then((r) => {
              console.log("Telegram response:", r);
            })
            .catch((e) => {
              console.error("Telegram error:", e);
            });
        })
        .catch((error) => {
          console.error("Error creating report:", error);
        });
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setFormData((prev) => ({
      ...prev,
      gps: `Latitude: ${latitude}, Longitude: ${longitude}`,
    }));
  };

  const renderInputField = (
    id,
    label,
    type = "text",
    placeholder = "",
    errorMessage
  ) => (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-gray-700 font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={formData[id]}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`border ${
          errors[id] ? "border-red-500" : "border-gray-300"
        } w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center mb-6">
          <img src={Image} alt="Logo" className="w-20 h-20 rounded" />
        </div>

        <div className="mb-6 text-justify text-lg font-sans">
          <p>
            &nbsp;iSumbong Mo is a web-based reporting system. If it's{" "}
            <span className="font-bold">
              emergency, fill out the form immediately.
            </span>{" "}
          </p>
        </div>

        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Report Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label
              htmlFor="reportType"
              className="block text-gray-700 font-medium"
            >
              Report Type
            </label>
            <select
              id="reportType"
              value={formData.reportType}
              onChange={handleInputChange}
              className={`border ${
                errors.reportType ? "border-red-500" : "border-gray-300"
              } w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <option value="">Select Type</option>
              <option value="Emergency">Emergency</option>
              <option value="Incident">Incident</option>
              <option value="Complain">Complain</option>
            </select>
            {errors.reportType && (
              <p className="text-red-500 text-sm">{errors.reportType}</p>
            )}
          </div>

          {renderInputField(
            "name",
            "Name",
            "text",
            "Enter your name",
            errors.name
          )}
          {renderInputField(
            "contactNumber",
            "Contact Number",
            "text",
            "Enter your number",
            errors.contactNumber
          )}
          {renderInputField("gps", "GPS Location", "text", "Auto-fill by GPS")}

          <div className="flex justify-center">
            <button
              type="button"
              onClick={getLocation}
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Location
            </button>
          </div>

          <div className="space-y-1">
            <label htmlFor="photo" className="block text-gray-700 font-medium">
              Upload Photo
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleFileChange}
              className={`border ${
                errors.photo ? "border-red-500" : "border-gray-300"
              } w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.photo && (
              <p className="text-red-500 text-sm">{errors.photo}</p>
            )}
          </div>

          <div className="space-y-1">
            <label htmlFor="video" className="block text-gray-700 font-medium">
              Upload Video
            </label>
            <input
              type="file"
              id="video"
              accept="video/*"
              onChange={handleFileChange}
              className="border border-gray-300 w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-1">
            <label
              htmlFor="reportDescription"
              className="block text-gray-700 font-medium"
            >
              Report Description
            </label>
            <textarea
              id="reportDescription"
              value={formData.reportDescription}
              onChange={handleInputChange}
              placeholder="Describe the incident..."
              className="border border-gray-300 w-full p-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              {loading ? <FaSpinner className="animate-spin" /> : "Report"}
            </button>
          </div>
        </form>

        {formSubmitted && (
          <div className="mt-6 text-center">
            <FaCheckCircle className="text-green-500 text-3xl mb-2 mx-auto" />
            <p className="text-gray-700">
              Thank you! Your report has been submitted.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
