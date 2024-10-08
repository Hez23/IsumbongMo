import React, { useEffect, useState } from "react";
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
import ReportService from "../Quirries";
import _ from "lodash";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const reportService = new ReportService();

const StatisticsChart = () => {
  const [reportsPerMonth, setReportsPerMonth] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const [labels, setLabels] = useState([]);

  const reportTypes = ["Incident", "Complain", "Emergency"];

  const colors = {
    Incident: "rgba(0, 0, 255, 0.6)", // Blue with opacity
    Complain: "rgba(0, 255, 0, 0.6)", // Green with opacity
    Emergency: "rgba(255, 0, 0, 0.6)", // Red with opacity
  };

  const borderColors = {
    Incident: "rgba(0, 0, 255, 1)", // Solid blue border
    Complain: "rgba(0, 255, 0, 1)", // Solid green border
    Emergency: "rgba(255, 0, 0, 1)", // Solid red border
  };

  useEffect(() => {
    reportService.getReportsCountByType().then((reports) => {
      console.log("reports", reports);
      setReportsPerMonth(reports);
      setLabels(Object.keys(reports));
      setDatasets(
        reportTypes.map((type) => {
          return {
            label: type,
            data: Object.keys(reports).map(
              (month) => reports[month][type] || 0
            ),
            backgroundColor: colors[type],
            borderColor: borderColors[type],
            borderWidth: 2,
            borderRadius: 10, // Make bars rounded
            hoverBackgroundColor: borderColors[type], // Brighten the hover state
            hoverBorderColor: "black", // Add a dark border on hover
            hoverBorderWidth: 3,
            barPercentage: 0.7, // Adjust bar width
          };
        })
      );
    });
  }, []);

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14, // Increase font size for readability
            weight: "bold", // Bold font for legend labels
          },
          color: "#333", // Darker legend text color
        },
      },
      title: {
        display: true,
        text: "Monthly Reports Count",
        font: {
          size: 18, // Larger title font
          weight: "bold",
        },
        color: "#333", // Darker title color
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.raw}`; // Corrected syntax for string concatenation
          },
        },
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the tooltip background
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove gridlines on X-axis
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.5)", // Lighten the gridlines
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 10,
        bottom: 10,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StatisticsChart;
