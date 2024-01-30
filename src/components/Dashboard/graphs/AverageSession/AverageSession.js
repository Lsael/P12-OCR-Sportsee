import React from "react";
import styles from "./AverageSession.module.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

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
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false
        },
        ticks: {
          color: "#FFFFFF",
        }
      },
      y: {
        display: false,
        min: -10
      },
    },
    elements: {
      point: {
        backgroundColor: "#FFFFFF",
        radius: 0,
        hitRadius: 20,
        hoverRadius: 5,
      },
      line: {
        borderWidth: 1.5,
        tension: 0.5,
        borderColor: "#FFFFFF",
        capBezierPoints: true,
      }
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Durée moyenne des sessions",
        color: "rgb(255, 255, 255, 0.5)",
        font: {
          size: 15
        } 
      },
      tooltip: {
        backgroundColor: "#FFFFFF",
        titleColor: "black",
        bodyColor: "black",
        bodyFont: {
          weight: "bold"
        },
        padding: 10,
        cornerRadius:0,
        displayColors: false,
        callbacks: {
          title: () => {return null},
          label: function (tooltipItems) {
            return tooltipItems.formattedValue + " " + tooltipItems.dataset.label
        }
        }
      }
    }
  };

  const labels = ["L", "M", "M", "J", "V", "S", "D"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "min",
        data: props.averageSession,
      },
    ]
  };

  return (
    <div className={styles.AverageSession}>
      <Line options={options} data={data} />
    </div>
  );
};

export default AverageSession;
