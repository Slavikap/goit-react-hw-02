import styles from "./Options.module.css"

function Options({ good, neutral, bad, reset, totalFeedback }) {
  return (
    <div className={styles.FeedbackWrapper}>
      <button className={styles.FeedbackBtn} onClick={good}>Good</button>
      <button className={styles.FeedbackBtn} onClick={neutral}>Neutral</button>
      <button className={styles.FeedbackBtn} onClick={bad}>Bad</button>
      {totalFeedback > 0 && (
        <button className={styles.ResetBtn} onClick={reset}>Reset</button>
      )}
    </div>
  );
}

export default Options;
