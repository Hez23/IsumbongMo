import React from "react";

const UserAgreement = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg mt-6 shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        User Agreement
      </h2>

      <div className="px-4 text-justify text-lg">
        <p className="mb-4">
          This User Agreement outlines the terms and conditions that govern your
          use of iSumbong Mo. By accessing or using the platform, you agree to
          be bound by this Agreement.
        </p>

        <h3 className="font-bold mt-4">1. Definition of a False Report</h3>
        <p className="mb-4">
          A "False Report" refers to any report submitted through the platform
          that contains information that is knowingly untrue, misleading, or
          deceptive. This includes, but is not limited to, reports made with the
          intention of causing harm, harassing individuals, or disrupting the
          operations of the platform.
        </p>

        <h3 className="font-bold mt-4">2. User Responsibilities</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            Provide accurate and truthful information in all reports submitted.
          </li>
          <li>
            Refrain from submitting any reports that you know to be false,
            misleading, or deceptive.
          </li>
          <li>
            Use the platform in a manner consistent with its intended purpose
            and in accordance with all applicable laws and regulations.
          </li>
        </ul>

        <h3 className="font-bold mt-4">
          3. Consequences of Submitting a False Report
        </h3>
        <p className="mb-4">
          If a user is found to have submitted a False Report, the following
          actions may be taken:
          <ul className="list-disc list-inside">
            <li>Immediate suspension or termination of the user's account.</li>
            <li>
              Notification to relevant authorities if the false report violates
              any laws or regulations.
            </li>
            <li>
              Legal action may be pursued by the platform or affected parties if
              necessary.
            </li>
          </ul>
        </p>

        <h3 className="font-bold mt-4">4. Investigation of Reports</h3>
        <p className="mb-4">
          The platform reserves the right to investigate any reports submitted
          to determine their validity. Users may be required to provide
          additional information or clarification during the investigation
          process.
        </p>

        <h3 className="font-bold mt-4">5. Disclaimer</h3>
        <p className="mb-4">
          The platform is not responsible for any consequences arising from the
          submission of false reports by users. Users are solely responsible for
          the accuracy of the information they provide.
        </p>

        <h3 className="font-bold mt-4">6. Acceptance of Terms</h3>
        <p className="mb-4">
          By using the platform, you acknowledge that you have read, understood,
          and agree to be bound by this Agreement.
        </p>

        <h3 className="font-bold mt-4">7. Changes to this Agreement</h3>
        <p className="mb-4">
          The platform reserves the right to modify or update this Agreement at
          any time. Users will be notified of any significant changes, and
          continued use of the platform constitutes acceptance of the new terms.
        </p>

        <h3 className="font-bold mt-4">8. Acceptance of Terms</h3>
        <p className="mb-4">
          By using the platform, you acknowledge that you have read, understood,
          and agree to be bound by this Agreement.
        </p>

        <div className="flex items-center mt-4 justify-center">
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-600 border-gray-300 focus:ring-blue-500 rounded"
          />
          <label className="ml-2 text-lg font-medium text-gray-900">
            I agree to the User Agreement
          </label>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition-all duration-300"
        >
          <a href="/Home/"> I Agree </a>
        </button>
      </div>
    </div>
  );
};

export default UserAgreement;
