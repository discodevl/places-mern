import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./SideDrawer.module.css";

function SideDrawer({ children, show, onClick }) {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside onClick={onClick} className={styles["side-drawer"]}>{children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
}

export default SideDrawer;
