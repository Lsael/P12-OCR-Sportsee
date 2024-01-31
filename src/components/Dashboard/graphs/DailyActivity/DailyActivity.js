import styles from "./DailyActivity.module.scss";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DailyActivity = (props) => {
  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      y: {
        position: "right",
      },
    },
    elements: {
      bar: {
        borderRadius: 6,
      },
    },
    datasets: {
      bar: {
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Activité quotidienne",
        align: "start",
      },
      tooltip: {
        position: "nearest",
        backgroundColor: "#E60000",
        bodyColor: "white",
        padding: 12,
        cornerRadius: 0,
        displayColors: false,
        bodyAlign: "center",
        bodySpacing: 32,
        xAlign: "left",
        yAlign: "bottom",
        caretSize: 0,
        caretPadding: 16,
        callbacks: {
          title: () => {
            return null;
          },
          label: (tooltipItems) => {
            return (
            tooltipItems.formattedValue + tooltipItems.dataset.label.split("(")[1].split(")")[0]
            );
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
      },
    },
  };

  const data = {
    labels: props.dailyActivity.dates,
    datasets: [
      {
        label: "Poids (kg)",
        data: props.dailyActivity.kilogram,
        backgroundColor: "black",
      },
      {
        label: "Calories brûlées (kCal)",
        data: props.dailyActivity.calories,
        backgroundColor: "#FF0101",
      },
    ],
  };

  return (
    <div className={`${styles.DailyActivity} graph`}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DailyActivity;
