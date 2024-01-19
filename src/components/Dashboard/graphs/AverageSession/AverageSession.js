import React, { useEffect, useState } from 'react';
import styles from './AverageSession.module.scss';
import { getUserAverageSessions } from '../../../../services/data.js'
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

const AverageSession = () => {
  const [graphDatas, setGraphDatas] = useState()
  
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
        data: graphDatas,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  
  useEffect(() => {
    getUserAverageSessions("12").then(res => setGraphDatas(res))
  },[])
  
  return (
  <div className={styles.AverageSession}>
    <Line options={options} data={data} />
  </div>
  )
};

export default AverageSession;
