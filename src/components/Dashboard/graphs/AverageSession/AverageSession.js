import React from "react";
import styles from "./AverageSession.module.scss";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomLegend = () => {
  return <h3>Durée moyenne des sessions</h3>;
};

const CustomTicks = ({labels}) => {
  return(
    <p className={styles.AverageSession__customTicks}>
    {labels.map((e) => {
      return(
        <span>{e}</span>
      )
    })}
    </p>
  )
}

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
          margin={{ top: 30, right: 0, left: 0, bottom: 50 }}
        >
          <XAxis
            dataKey="name"
            hide={true}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            height="20%"
            width="80%"
            content={<CustomLegend />}
          />
          <Line type="basis" dataKey="sessionData" stroke="white" dot={false}  />
        </LineChart>
      </ResponsiveContainer>
      <CustomTicks labels={labels} />
    </div>
  );
};

export default AverageSession;
