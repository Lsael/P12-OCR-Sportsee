import React from 'react';
import styles from './TopNavBar.module.scss';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const TopNavBar = () => (
  <div className={styles.TopNavBar}>
    <nav>
      <div className={styles.TopNavBar__logo}>
        <img src={logo} alt="Logo Sportsee"/>
      </div>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/">Profil</NavLink>
      <NavLink to="/">Réglages</NavLink>
      <NavLink to="/">Communauté</NavLink>
    </nav>
  </div>
);

export default TopNavBar;
