import React from 'react';
import styles from "./Alertbox.module.css";

export default function Modal({ closeModal }) {
  return (
      <div className={styles.modalContainer}>
        <div className={styles.message}>
            <p>Enter all the required data!!</p>
        </div>
        <div className={styles.closebtn}>
            <button onClick={() => closeModal(false)}> X </button>
        </div>
      </div>
  )
}
