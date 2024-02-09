import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import SegmentChart from "./SegmentChart";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const scores = [428000, 96000, 94000, 33000];
const labels = ["Benign", "Defacement", "Phishing", "Malware"];

const options = {
  fill: true,
  scales: {
    y: {
      min: 0,
      max: 500000,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function BarChart() {
  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Counts of Different URL Types",
          tension: 0.3,
          data: scores,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: ["#428bca", "#5cb85c", "#5bc0de", "#d9534f"],
        },
      ],
      labels,
    };
  }, []);

  return <Bar data={data} options={options} className="w-[100%]" />;
}
