import React from 'react';
import Layout from '../Layout/Layout.js';
import styles from './Dashboard.module.scss';
import Title from './Title/Title.js';
import Resume from './Resume/Resume.js';
import DailyActivity from './graphs/DailyActivity/DailyActivity.js';
import AverageSession from './graphs/AverageSession/AverageSession.js';
import Intensity from './graphs/Intensity/Intensity.js';
import Score from './graphs/Score/Score.js';

const Dashboard = () => {
  // fetch les données ici et passer en props

  return(
  <Layout>
    <div className={styles.Dashboard}>
      <section className={styles.main}>
        <Title />
        <div className={styles.graphs}>
          <DailyActivity />
          <div className={styles.details}>
            <AverageSession />
            <Intensity />
            <Score />
          </div>
          <Resume />
        </div>
      </section>
    </div>
  </Layout>
);
}

export default Dashboard;
