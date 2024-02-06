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
  ResponsiveContainer,
} from "recharts";

const DailyActivity = (props) => {
  const data = props.dailyActivity;

  return (
    <div className={`${styles.DailyActivity} graph`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={850} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" />
          <Bar dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
