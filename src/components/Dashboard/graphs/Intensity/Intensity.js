import React from "react";
import styles from "./Intensity.module.scss";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const Intensity = (props) => {
  console.log(props);
  const data = props.intensity

  return (
    <RadarChart
      className={styles.Intensity}
      outerRadius={90}
      width={300}
      height={250}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar
        name="Intensité"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default Intensity;
