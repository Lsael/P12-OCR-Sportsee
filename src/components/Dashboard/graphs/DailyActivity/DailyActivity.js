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
          padding: 16,
        },
      },
      y: {
        position: "right",
        ticks: {
          padding: 16,
        },
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
        display: false
      },
      title: {
        display: false,
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
              tooltipItems.formattedValue +
              tooltipItems.dataset.label
              );
            },
          },
          interaction: {
            mode: "index",
            intersect: false,
          },
        },
      },
    };
    
    const data = {
      labels: props.dailyActivity.dates,
      datasets: [
        {
          label: "kg",
          data: props.dailyActivity.kilogram,
          backgroundColor: "black",
        },
        {
          label: "kCal",
          data: props.dailyActivity.calories,
          backgroundColor: "#FF0101",
        },
      ],
    };

  return (
    <div className={`${styles.DailyActivity} graph`}>
      <p className={styles.DailyActivity__head}>
        <h2>Activité quotidienne</h2>
        <p className={styles.DailyActivity__legend}>
          <p className={styles.weight}>
            <span>&#9679;</span>
            <span>Poids (kg)</span>
          </p>
          <p className={styles.calories}>
            <span>&#9679;</span>
            <span>Calories brûlées (kCal)</span>
          </p>
        </p>
      </p>
      <Bar options={options} data={data} />
    </div>
  );
};

export default DailyActivity;
