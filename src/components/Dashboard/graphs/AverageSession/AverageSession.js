import React from "react";
import styles from "./AverageSession.module.scss";
import {
  Legend,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomLegend = () => {
  return <h3>Durée moyenne des sessions</h3>;
};

const CustomCursor = (props) => {
  const { pointerEvents, points, className } = props;

  const { x, y } = points[0];
  return (
    <>
      <Rectangle
        x={x}
        y={y - 1000}
        stroke={false}
        pointerEvents={pointerEvents}
        width={2000}
        height={2000}
        points={points}
        className={className}
        type="linear"
        fill="rgba(0, 0, 0, 0.2)"
      />
    </>
  );
};

const AverageSession = (props) => {
  const labels = ["L", "M", "M", "J", "V", "S", "D"];

  const data = props.averageSession.map((e, index) => {
    return {
      name: labels[index],
      sessionData: e,
    };
  });

  return (
    <div className={`${styles.AverageSession} graph`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 30, right: 0, left: 0, bottom: 30 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tick={{ fill: "white" }}
            padding={{right:5, left:5}}
          />
          <Tooltip
            contentStyle={{ width: "max-content", aspectRatio: "auto" }}
            itemStyle={{ color: "black" }}
            labelStyle={{ display: "none" }}
            formatter={(value) => [value]}
            cursor={<CustomCursor />}
          />
          <Legend
            verticalAlign="top"
            height="20%"
            width="80%"
            content={<CustomLegend />}
          />
          <Line
            type="natural"
            dataKey="sessionData"
            stroke="white"
            dot={false}
            unit=" min"
          />
        </LineChart>
      </ResponsiveContainer>
      {/*       <CustomTicks labels={labels} /> */}
    </div>
  );
};

export default AverageSession;
