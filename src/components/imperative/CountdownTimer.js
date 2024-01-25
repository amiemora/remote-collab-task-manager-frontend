import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from "react";

/**
 * By using useImperativeHandle, we've created a clear and controlled communication channel between
 * the CountdownTimer child component and its parent TimerControlPanel.
 * The parent can initiate specific actions on the child component, such as starting, pausing, or resetting the countdown timer.
 * This pattern is particularly useful when you need to expose imperative functionality from a child component to its parent.
 */
const CountdownTimer = forwardRef((props, ref) => {
  const [seconds, setSeconds] = useState(props.initialSeconds);
  const [isActive, setIsActive] = useState(false);

  const startTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsActive(false);
  }, []);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setSeconds(props.initialSeconds);
  }, [props.initialSeconds]);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(intervalId);
            setIsActive(false);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]);

  // Exposing functions to the parent component using useImperativeHandle
  useImperativeHandle(
    ref,
    () => ({
      start: startTimer,
      pause: pauseTimer,
      reset: resetTimer,
    }),
    [startTimer, pauseTimer, resetTimer]
  );

  return (
    <div>
      <h2>Countdown Timer</h2>
      <p>{seconds}s</p>
    </div>
  );
});

export default CountdownTimer;
