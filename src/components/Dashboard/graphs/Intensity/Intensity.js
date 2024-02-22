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
import { handleError } from "../../../../services/data";

const Intensity = (props) => {
  if (props.intensity.error) {
    return handleError();
  }
  
  const data = props.intensity;

  return (
    <div className={`${styles.Intensity} graph`}>
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="kind" stroke="white" tickLine={false} fontSize={12} />
          <PolarRadiusAxis angle={30} domain={[0, 200]} tick={false}/>
          <Radar
            name="Intensité"
            dataKey="value"
            stroke="rgba(255, 1, 1)"
            fill="rgba(255, 1, 1)"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Intensity;
