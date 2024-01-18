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
  const [kinds, setKinds] = useState([])
  const [perfDatas, setPerfDatas] = useState([])
  
  const buildDatas = (datas) => {
    let kinds = Object.keys(datas.kind).map((e) => {return datas.kind[e]})
    let sortedPerfDatas = datas.data.sort((a,b) => a.kind - b.kind).map((e) => {return e.value})

    setKinds(kinds)
    setPerfDatas(sortedPerfDatas)
  }
  
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
    labels:kinds,
    datasets: [
      {
        data: perfDatas,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  
  useEffect(() => {
    getUserPerformance("12").then(res => buildDatas(res)) 
  },[])

  return (
  <div className={styles.Intensity}>
    <Radar options={options} data={data} />
  </div>
);
} 

export default Intensity;
