import React from "react";
import styles from "./Intensity.module.scss";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Intensity = (props) => {
  const options = {
    responsive: true,
    scales: {
      r: {
        grid: {
          color: "white",
        },
        ticks: {
          display: false,
          stepSize: 50,
        },
        suggestedMin: 0,
        pointLabels: {
          color: "white",
          font: {
            size: 12,
          },
        },
      },
    },
    elements: {
      point: {
        backgroundColor: "#FFFFFF",
        radius: 0,
        hitRadius: 20,
        hoverRadius: 5,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#FFFFFF",
        titleColor: "black",
        bodyColor: "black",
        bodyFont: {
          weight: "bold",
        },
        padding: 10,
        cornerRadius: 0,
        displayColors: false,
        callbacks: {
          title: () => {
            return null;
          },
        },
      },
    },
  };

  const data = {
    labels: props.intensity.kinds,
    datasets: [
      {
        data: props.intensity.datas,
        backgroundColor: "rgba(255, 1, 1, 0.7)",
      },
    ],
  };

  return (
    <div className={styles.Intensity}>
      <Radar options={options} data={data} />
    </div>
  );
};

export default Intensity;
