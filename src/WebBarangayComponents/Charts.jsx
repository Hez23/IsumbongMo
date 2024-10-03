import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsChart = () => {
  // Sample data for Complain, Incident, and Emergency
  const data = {
    labels: [
      "January 1, 2024 - 10:00 AM",
      "February 2, 2024 - 11:30 AM",
      "March 3, 2024 - 1:15 PM",
      "April 4, 2024 - 2:45 PM",
      "May 5, 2024 - 3:30 PM",
      "June 6, 2024 - 4:00 PM",
    ],
    datasets: [
      {
        label: "Complain",
        data: [20, 15, 30, 25, 10, 5], // Example data
        backgroundColor: "rgba(255, 255, 0, 0.6)", // Yellow
        borderColor: "rgba(255, 255, 0, 1)",
        borderWidth: 1,
      },
      {
        label: "Incident",
        data: [15, 30, 25, 35, 20, 10], // Example data
        backgroundColor: "rgba(255, 0, 0, 0.6)", // Red
        borderColor: "rgba(255, 0, 0, 1)",
        borderWidth: 1,
      },
      {
        label: "Emergency",
        data: [5, 10, 15, 20, 25, 30], // Example data
        backgroundColor: "rgba(0, 0, 255, 0.6)", // Blue
        borderColor: "rgba(0, 0, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Report by Type",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StatisticsChart;
