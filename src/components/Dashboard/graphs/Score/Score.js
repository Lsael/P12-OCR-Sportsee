import React from "react";
import styles from "./Score.module.scss";
import { Pie, PieChart } from "recharts";

const Score = (props) => {
  const data = [{
    name: "score",
    score: props.score
  },
  {
    name: "placeholder",
    score: 1 - props.score
  }]
  return (
    <div className={styles.Score}>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          nameKey="name"
          dataKey="score"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="rgba(255, 1, 1)"
        />
      </PieChart>
      <p className={styles.Score__count}>
        <span className={styles.Score__percentage}>{`${
          props.score * 100
        } %`}</span>
        <span className={styles.Score__span}>de votre objectif</span>
      </p>
    </div>
  );
};

export default Score;
