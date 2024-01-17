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
  const [datesList, setDatesList] = useState([])
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
    getUserActivity("12").then(res => buildDatas(res)) 
  },[])

  return(
  <div className={`${styles.DailyActivity} graph`}>
    <Bar options={options} data={data} />
  </div>
)}

export default DailyActivity;
