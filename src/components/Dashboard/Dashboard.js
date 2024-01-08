import React from 'react';
import UserDatas from '../../services/data.js';
import Layout from '../Layout/Layout.js';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const userDatas = new UserDatas("12")
  const data = userDatas.fetchUserInfos()
  return(
  <Layout>
    <div className={styles.Dashboard}>
      <section className={styles.title}>
        test
        {data.firstName}
      </section>
    </div>
  </Layout>
);
}

export default Dashboard;
