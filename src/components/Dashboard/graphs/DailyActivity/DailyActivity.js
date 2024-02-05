import styles from "./DailyActivity.module.scss";
import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";

const DailyActivity = (props) => {
  const data = props.dailyActivity
  
  return (
    <div className={`${styles.DailyActivity} graph`}>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="calories" fill="#8884d8" />
        <Bar dataKey="kilogram" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default DailyActivity;
