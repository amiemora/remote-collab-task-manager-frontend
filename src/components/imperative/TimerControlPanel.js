import React, { useRef } from "react";
import CountdownTimer from "./CountdownTimer";

const TimerControlPanel = () => {
  const countdownTimerRef = useRef(null);

  const handleStart = () => {
    countdownTimerRef.current.start();
  };

  const handlePause = () => {
    countdownTimerRef.current.pause();
  };

  const handleReset = () => {
    countdownTimerRef.current.reset();
  };

  return (
    <div>
      <CountdownTimer ref={countdownTimerRef} initialSeconds={60} />
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default TimerControlPanel;
