import React from "react";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <MainHeader>
      <button className={styles['main-navigation__menu-btn']}>
        <span />
        <span />
        <span />
      </button>
      <h1 className={styles['main-navigation__title']}>
        <Link to='/'>YourPlaces</Link>
      </h1>
      <nav>
        ...
      </nav>
    </MainHeader>
  );
}

export default MainNavigation;
