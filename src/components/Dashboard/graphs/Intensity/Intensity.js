import React from 'react';
import styles from './Intensity.module.scss';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Intensity = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Intensité',
      },
    }
  };
  
  const data = {
    labels:props.intensity.kinds,
    datasets: [
      {
        data: props.intensity.datas,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
  <div className={styles.Intensity}>
    <Radar options={options} data={data} />
  </div>
);
} 

export default Intensity;
