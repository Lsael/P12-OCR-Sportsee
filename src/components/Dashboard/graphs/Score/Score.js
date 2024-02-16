import React from "react";
import styles from "./Score.module.scss";
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts";

const CustomLabel = (props) => {
  console.log(props.value);
  return (
    <p className={styles.Score__count}>
      <span className={styles.Score__percentage}>{`${
        props.value * 100
      } %`}</span>
      <span className={styles.Score__span}>de votre objectif</span>
    </p>
  );
};

const Score = (props) => {
  const data = [
    {
      name: "score",
      score: props.score,
    },
    {
      name: "placeholder",
      score: 1 - props.score,
    }
  ];

  const placeholder = [
    {
      name: "placeholder2",
      value: 1
    }
  ]

  const COLORS = ["rgba(255, 1, 1)", "#FBFBFB"];

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
            cornerRadius={50}
            startAngle={-270}
            stroke="#FBFBFB"
          >
            {data.map((value, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Pie data={placeholder} dataKey="value" cx="50%" cy="50%" outerRadius={70} fill="white" />
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
