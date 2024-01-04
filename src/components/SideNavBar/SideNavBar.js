import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SideNavBar.module.scss';
import yogaIcon from '../../assets/yoga.png'
import swimmingIcon from '../../assets/swimming.png'
import bicycleIcon from '../../assets/bicycle.png'
import musculationIcon from '../../assets/musculation.png'

const SideNavBar = () => (
  <section className={styles.SideNavBar}>
    <nav>
      <Link to="/"><img src={yogaIcon} alt="Yoga" /></Link>
      <Link to="/"><img src={swimmingIcon} alt="Bicycle" /></Link>
      <Link to="/"><img src={bicycleIcon} alt="Bicycle" /></Link>
      <Link to="/"><img src={musculationIcon} alt="Bicycle" /></Link>
    </nav>
    <p>Copyright, SportSee 2020</p>
  </section>
);

export default SideNavBar;
