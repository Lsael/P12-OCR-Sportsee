import styles from "./DailyActivity.module.scss";
import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const DailyActivity = (props) => {
  const data = props.dailyActivity;

  return (
    <BarChart
      width={850}
      height={250}
      data={data}
      className={`${styles.DailyActivity} graph`}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#282D30" />
      <Bar dataKey="calories" fill="#E60000" />
    </BarChart>
  );
};

export default DailyActivity;
