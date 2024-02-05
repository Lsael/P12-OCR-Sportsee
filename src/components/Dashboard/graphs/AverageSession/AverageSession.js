import React from "react";
import styles from "./AverageSession.module.scss";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const AverageSession = (props) => {
  const labels = ["L", "M", "M", "J", "V", "S", "D"];
  
  const data = props.averageSession.map((e, index) => {
    return({
      name: labels[index],
      sessionData: e
    })
  })

  return (
    <div className={styles.AverageSession}>
      <LineChart
        width={250}
        height={300}
        data={data}
        margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sessionData" stroke="white" />
      </LineChart>
    </div>
  );
};

export default AverageSession;
