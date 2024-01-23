import React from "react";
import styles from "./Score.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Score = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "center",
      },
      title: {
        display: true,
        text: "Score",
      },
    },
  };

  const data = {
    labels: [],
    datasets: [
      {
        label: "%",
        data: [props.score, 1 - props.score],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "#FBFBFB"],
      },
    ],
  };

  return (
    <div className={styles.Score}>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default Score;
