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
  /* const [datesList, setDatesList] = useState([])
  const [kilogramList, setKilogramList] = useState([])
  const [caloriesList, setCaloriesList] = useState([])
  
  const buildDatas = (datas) => {
    let dates = []
    let kilogram = []
    let calories = []
    
    datas.forEach(element => {
      dates.push(element.day)
      kilogram.push(element.kilogram)
      calories.push(element.calories)
    });
    
    setDatesList(dates)
    setKilogramList(kilogram)
    setCaloriesList(calories)
  }
  
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
    labels:datesList,
    datasets: [
      {
        label: 'Poids (kg)',
        data: kilogramList,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Calories brûlées (kCal)',
        data: caloriesList,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  useEffect(() => {
    getUserPerformance("12").then(res => console.log(res)) 
  },[]) */

  return (
  <div className={styles.Intensity}>
{/*     <Radar options={options} data={data} /> */}
  </div>
);
} 

export default Intensity;
