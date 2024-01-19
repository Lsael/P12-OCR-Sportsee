import styles from './DailyActivity.module.scss';
import React, { useEffect, useState } from 'react';
import { getUserActivity } from '../../../../services/data.js';
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

const DailyActivity = () => {
  const [graphDatas, setGraphDatas] = useState({})
  
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
    labels:graphDatas.dates,
    datasets: [
      {
        label: 'Poids (kg)',
        data: graphDatas.kilogram,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Calories brûlées (kCal)',
        data: graphDatas.calories,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  useEffect(() => {
    getUserActivity("12").then(res => setGraphDatas(res)) 
  },[])

  return(
  <div className={`${styles.DailyActivity} graph`}>
    <Bar options={options} data={data} />
  </div>
)}

export default DailyActivity;
