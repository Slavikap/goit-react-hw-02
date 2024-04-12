import React, { useState, useEffect } from 'react';
import './App.module.css';
import Description from "./components/Description/Description.jsx";
import Feedback from './components/Feedback/Feedback.jsx';
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const initialState = JSON.parse(localStorage.getItem('feedbackState')) || {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [state, setState] = useState(initialState);

  const { good, neutral, bad } = state;

  useEffect(() => {
    localStorage.setItem('feedbackState', JSON.stringify(state));
  }, [state]);

  const totalFeedback = good + neutral + bad;

  const Good = () => {
    setState(prevState => ({
      ...prevState,
      good: prevState.good + 1
    }));
  };

  const Neutral = () => {
    setState(prevState => ({
      ...prevState,
      neutral: prevState.neutral + 1
    }));
  };

  const Bad = () => {
    setState(prevState => ({
      ...prevState,
      bad: prevState.bad + 1
    }));
  };

  const Reset = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
      <Description />
      <Options
        good={Good}
        neutral={Neutral}
        bad={Bad}
        reset={Reset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification message="No feedback given yet" />
      )}
    </>
  );
}

export default App;
