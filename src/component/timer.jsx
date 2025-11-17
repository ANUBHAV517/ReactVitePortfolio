import { useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const startTimer = () => {
    if (!intervalId) {
      const timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      setIntervalId(timer);
    }
  };
  const pauseTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  const resumeTimer = () => {
    console.log('resume');
    startTimer();
  };
  const stopTimer = () => {
    setCount(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };
  return (
    <div>
      <div>{count}</div>
      <div className="contols board">
        <button onClick={() => startTimer()}>Start</button>
        <button onClick={() => pauseTimer()}>Pause</button>
        <button onClick={() => resumeTimer()}>Resume</button>
        <button onClick={() => stopTimer()}>Stop</button>
      </div>
    </div>
  );
};

export default Timer;
