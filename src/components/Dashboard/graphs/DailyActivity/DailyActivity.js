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
import { handleError } from "../../../../services/data";

const CustomLegend = () => {
  return (
    <div className={styles.DailyActivity__head}>
      <h3>Activité quotidienne</h3>
      <div className={styles.DailyActivity__legend}>
        <p className={styles.weight}>
          <span>&#9679;</span>
          <span>Poids (kg)</span>
        </p>
        <p className={styles.calories}>
          <span>&#9679;</span>
          <span>Calories brûlées (kCal)</span>
        </p>
      </div>
    </div>
  );
};

const DailyActivity = (props) => {
  if (props.dailyActivity.error) {
    return handleError();
  }
  const data = props.dailyActivity;

  return (
    <div className={`${styles.DailyActivity} graph`}>
      <ResponsiveContainer width="95%">
        <BarChart
          data={data}
          barCategoryGap="30%"
          barGap={16}
          margin={{ top: 10, right: 0, bottom: 20, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <XAxis
            dataKey="name"
            tickMargin={20}
            tickLine={false}
            stroke="#9B9EAC"
          />
          <YAxis
            orientation="right"
            axisLine={false}
            tickMargin={20}
            tickLine={false}
            stroke="#9B9EAC"
          />
          <Tooltip
            separator=""
            wrapperStyle={{ top: "-20%", left: 50 }}
            contentStyle={{ background: "#E60000" }}
            labelStyle={{ display: "none" }}
            itemStyle={{ color: "white", lineHeight: "3" }}
            formatter={(name, value, unit) => [name, unit]}
          />
          <Legend content={<CustomLegend />} verticalAlign="top" height="20%" />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            unit="kg"
            radius={[50, 50, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            unit="kCal"
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailyActivity;
