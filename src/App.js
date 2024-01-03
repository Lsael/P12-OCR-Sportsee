import React from 'react';
import styles from './App.module.scss';
import TopNavBar from './components/TopNavBar/TopNavBar.js'
import SideNavBar from './components/SideNavBar/SideNavBar.js'
import Dashboard from './components/Dashboard/Dashboard.js'

const App = () => (
  <div className={styles.App}>
    <TopNavBar />
    <SideNavBar />
    <Dashboard />
  </div>
);

export default App;
