import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart() {
  const data = {
    labels: ["Benign", "Defacement", "Phishing", "Malware"],
    datasets: [
      {
        label: "Distribution",
        data: [65.7, 14.8, 14.5, 4.99],
        backgroundColor: ["#428bca", "#5cb85c", "#5bc0de", "#d9534f"],
        borderColor: ["white", "white", "white", "white"],
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Doughnut Chart",
        },
      },
    },
  };

  const options = {};

  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: true,
      }}
    ></Doughnut>
  );
}
