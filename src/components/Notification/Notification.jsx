import React from 'react';
import styles from "./Notification.module.css"

function Notification({ message }) {
  return (
    <div>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Notification;
