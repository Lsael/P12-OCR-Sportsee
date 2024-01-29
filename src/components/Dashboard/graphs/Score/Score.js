import React from "react";
import styles from "./Score.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Score = (props) => {
  const options = {
    cutout: "85%",
    responsive: true,
    borderColor: "#FBFBFB",
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Score",
        align: "start",
        color: "black",
        font: {
          weight: "bold",
          size: "18",
        }
      },
    },
    // disable Hover and Tooltips
    events: []
  };

  const data = {
    labels: [],
    datasets: [
      {
        label: "%",
        data: [1 - props.score, props.score],
        backgroundColor: ["#FBFBFB", "rgba(255, 1, 1)"],
        borderRadius: 1000
      },
    ],
  };

  return (
    <div className={styles.Score}>
      <Doughnut options={options} data={data} />
      <p className={styles.Score__count}>
        <span className={styles.Score__percentage}>{`${props.score * 100} %`}</span>
        <span className={styles.Score__span}>de votre objectif</span>
      </p>
    </div>
  );
};

export default Score;
