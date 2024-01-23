import React from 'react';
import styles from './AverageSession.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AverageSession = (props) => {
 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Durée moyenne des sessions',
      },
    },
  };
  
  const labels = ["L","M","M","J","V","S","D"]

  const data = {
    labels:labels,
    datasets: [
      {
        label: 'minutes',
        data: props.averageSession,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
  <div className={styles.AverageSession}>
    <Line options={options} data={data} />
  </div>
  )
};

export default AverageSession;
