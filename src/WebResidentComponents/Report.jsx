import React from "react";
import Image from "../assets/image.png";
function Report() {
  return (
    <div class="container mx-auto p-6 bg-gray-200 rounded-lg mt-6 px-16">
      <div class="content text-center">
        <div className="flex justify-center">
          <img src={Image} alt="Logo" className="w-20 h-20 rounded" />
        </div>
        <div class="content2">
          <h1 class="text-lg font-bold font-sans mt-[20%] mb-[20%]">
            iSumbongMo
          </h1>
        </div>
        <div class="content1 text-justify">
          <p class="text-base font-sans">
            Your report has been forwarded to BDRRMO/Barangay Officials. Rest
            assured, the requested assistance will arrive immediately.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Report;
