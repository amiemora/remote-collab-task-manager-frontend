import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, reset } from "./counterSlice";

/**
 * This is a counter with a reset button
 */
export function Reset() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button aria-label="Reset value" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <span>{count}</span>
      </div>
    </div>
  );
}
