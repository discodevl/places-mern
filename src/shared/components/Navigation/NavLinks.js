import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

function NavLinks() {
  return (
    <ul className={styles['nav-links']}>
      <li>
        <NavLink to="/" exact>ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/u1/place">new place</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">add place</NavLink>
      </li>
      <li>
        <NavLink to="/auth">auth</NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
