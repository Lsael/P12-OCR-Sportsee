import React from 'react';
import styles from './Layout.module.scss';
import TopNavBar from '../TopNavBar/TopNavBar.js'
import SideNavBar from '../SideNavBar/SideNavBar.js'

const Layout = ({children}) => (
  <div className={styles.Layout}>
    <TopNavBar />
    <div className={styles.Layout__main}>
      <SideNavBar />
      {children}
    </div>
  </div>
);

export default Layout;
