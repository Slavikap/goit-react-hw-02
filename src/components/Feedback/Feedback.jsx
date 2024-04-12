
import styles from "./Feedback.module.css"

function Feedback(props) {
      const {good, neutral, bad, totalFeedback} = props;
      return (
            <>
            <p className={styles.FeedbackPar}>Good: {good}</p>
            <p className={styles.FeedbackPar}>Neutral: {neutral}</p>
            <p className={styles.FeedbackPar}>Bad: {bad}</p>
            <p className={styles.FeedbackPar}>Positive: {Math.round((good / totalFeedback) * 100)
}%</p>
            </>
      )
}

export default Feedback