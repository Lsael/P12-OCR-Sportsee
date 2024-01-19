import React, { useEffect, useState } from 'react';
import styles from './Intensity.module.scss';
import { getUserPerformance } from '../../../../services/data';
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

const Intensity = () => {
  const [graphDatas, setGraphDatas] = useState({})
  
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
    labels:graphDatas.kinds,
    datasets: [
      {
        data: graphDatas.datas,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  
  useEffect(() => {
    getUserPerformance("12").then(res => setGraphDatas(res)) 
  },[])

  return (
  <div className={styles.Intensity}>
    <Radar options={options} data={data} />
  </div>
);
} 

export default Intensity;
