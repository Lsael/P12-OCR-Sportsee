import React, { useEffect, useState } from "react";
import {  getUserScore } from "../../../../services/data";
import styles from "./Score.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Score = () => {
  const [graphDatas, setGraphDatas] = useState([]);

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
        data: [graphDatas, 1 - graphDatas],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "#FBFBFB"],
      },
    ],
  };

  useEffect(() => {
    getUserScore("12").then((res) => setGraphDatas(res));
  }, []);
  
  return (
    <div className={styles.Score}>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default Score;
