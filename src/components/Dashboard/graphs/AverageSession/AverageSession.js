import React, { useEffect, useState } from 'react';
import styles from './AverageSession.module.scss';

const AverageSession = () => {
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
/*     getUserActivity("12").then(res => buildDatas(res))  */
  },[])

  return (
  <div className={styles.AverageSession}>
    Durée moyenne des sessions
  </div>
  )
};

export default AverageSession;
