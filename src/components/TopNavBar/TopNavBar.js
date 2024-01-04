import React from 'react';
import styles from './TopNavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import brand from '../../assets/brand.png'

const TopNavBar = () => (
  <section className={styles.TopNavBar}>
    <nav>
      <Link to="/" className={styles.TopNavBar__logo}>
          <img src={logo} alt="Logo Sportsee" className={styles.logo__image}/>
          <img src={brand} alt="Sportsee" className={styles.logo__brand}/>
      </Link>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/">Profil</NavLink>
      <NavLink to="/">Réglages</NavLink>
      <NavLink to="/">Communauté</NavLink>
    </nav>
  </section>
);

export default TopNavBar;
