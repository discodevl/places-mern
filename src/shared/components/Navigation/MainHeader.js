import React from "react";
import styles from "./MainHeader.module.css";

function MainHeader({ children }) {
  return <header className={styles["main-header"]}>{children}</header>;
}

export default MainHeader;
