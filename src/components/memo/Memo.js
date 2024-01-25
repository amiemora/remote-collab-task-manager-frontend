import React, { useState, useMemo } from "react";

/**
 * By using useMemo, we ensure that the factorial is only recalculated when the number changes,
 * avoiding unnecessary calculations and improving performance.
 * This is particularly useful when dealing with expensive computations in components.
 */

const Memo = () => {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    console.log(`Calculating factorial for ${number}`);
    if (number === 0 || number === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <label>
        Enter a number:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        />
      </label>
      <p>
        Factorial of {number} is: <strong>{factorial}</strong>
      </p>
    </div>
  );
};

export default Memo;
