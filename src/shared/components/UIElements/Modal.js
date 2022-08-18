import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function ModalOverlay(props) {
  const content = (
    <div className={`modal ${props.className}`} style={props.style}>
      <header className={styles["modal__header" + props.headerClass]}>
        <h2>{props.header}</h2>
      </header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault}>
        <div className={styles['modal__content' + props.contentClass]}></div>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
}

function Modal() {
  return <div></div>;
}

export default Modal;
