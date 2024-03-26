import React from "react";
import { Line } from "react-chartjs-2";

const StudentLineChart = ({ PrimEval, SegEval, FinalEval }) => {
  const data = {
    labels: ["Prim Eval", "Seg Eval", "Final eval"],
    datasets: [
      {
        label: "STUDENT CHART",
        data: [PrimEval, SegEval, FinalEval],
        fill: false,
        backgroundColor: [
          "rgba(63, 81, 181, 0.2)" /* Vibrant Blue for Male */,
          "rgba((255, 105, 180, 0.2)", // vibrant pink for Female
          "rgba(255, 165, 0, 0.2)", // orange for Undefined
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 2, // Increase the border width for better visibility
        pointRadius: 5, // Increase the point radius for better visibility
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)", // Add grid lines with a lighter color
        },
        ticks: {
          font: {
            size: 14, // Increase font size for better readability
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 16, // Increase legend font size
          },
        },
      },
    },
  };

  return (
    <div className="bg-white border border-secondary p-3">
      <Line data={data} options={options} />
    </div>
  );
};

export default StudentLineChart;
