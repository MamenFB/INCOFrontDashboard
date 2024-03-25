import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const PieChart = ({ maleCount, femaleCount, undefinedCount }) => {
  const data = {
    labels: ["Male", "Female", "Undefined"],
    datasets: [
      {
        data: [maleCount, femaleCount, undefinedCount],
        backgroundColor: [
          "rgba(0, 153, 255, 0.6)", // Red for Male
          "rgba(255, 20, 147, 0.6)", // Vibrant Pink for Female
          "rgba(255, 165, 0, 0.6)", // Vibrant Orange for Undefined
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
