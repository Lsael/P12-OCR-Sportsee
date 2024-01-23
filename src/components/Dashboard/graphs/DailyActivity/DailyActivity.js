import styles from './DailyActivity.module.scss';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DailyActivity = (props) => {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Activité quotidienne',
      },
    },
  };
  
  const data = {
    labels:props.dailyActivity.dates,
    datasets: [
      {
        label: 'Poids (kg)',
        data: props.dailyActivity.kilogram,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Calories brûlées (kCal)',
        data: props.dailyActivity.calories,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return(
  <div className={`${styles.DailyActivity} graph`}>
    <Bar options={options} data={data} />
  </div>
)}

export default DailyActivity;
