import React from "react";
import styles from "./Intensity.module.scss";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const Intensity = (props) => {
  const data = props.intensity;

  return (
    <div className={`${styles.Intensity} graph`}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} width={300} height={250} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Intensité"
            dataKey="value"
            stroke="rgba(255, 1, 1, 0.7)"
            fill="rgba(255, 1, 1, 0.7)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Intensity;
