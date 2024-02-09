import React from "react";
import styles from "./Score.module.scss";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const Score = (props) => {
  const data = [
    {
      name: "score",
      score: props.score,
    },
    {
      name: "placeholder",
      score: 1 - props.score,
    },
  ];
  
  const COLORS = ['rgba(255, 1, 1)', 'white'];

  return (
    <div className={styles.Score}>
      <h3 className={styles.Score__title}>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={250}>
          <Pie
            data={data}
            nameKey="name"
            dataKey="score"
            cx="50%"
            cy="50%"
            outerRadius={85}
            innerRadius={70}
            fill="rgba(255, 1, 1)"
            cornerRadius={50}
            startAngle={-270}
            >
            {
              data.map((value, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
            }
            </Pie>
        </PieChart>
        <p className={styles.Score__count}>
          <span className={styles.Score__percentage}>{`${
            props.score * 100
          } %`}</span>
          <span className={styles.Score__span}>de votre objectif</span>
        </p>
      </ResponsiveContainer>
    </div>
  );
};

export default Score;
