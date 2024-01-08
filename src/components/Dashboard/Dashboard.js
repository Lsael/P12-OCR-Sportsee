import React from 'react';
import Layout from '../Layout/Layout.js';
import styles from './Dashboard.module.scss';
import Title from './Title/Title.js';

const Dashboard = () => {

  return(
  <Layout>
    <div className={styles.Dashboard}>
      <section className={styles.title}>
        <Title />
      </section>
    </div>
  </Layout>
);
}

export default Dashboard;
