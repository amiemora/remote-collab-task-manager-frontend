import React, { useState, useLayoutEffect, useRef } from "react";

/**
 * In this example, we'll use useLayoutEffect to measure the height of an element after it has been rendered and update the state accordingly.
 * This can be useful for scenarios where you need to perform layout calculations immediately after the DOM has been painted.
 */
const AutoResizableBox = () => {
  const [boxHeight, setBoxHeight] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    // Measure the height of the box after it has been rendered
    const height = boxRef.current.clientHeight;
    setBoxHeight(height);
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      <h2>Auto-Resizable Box</h2>
      <div
        ref={boxRef}
        style={{ border: "1px solid #ccc", padding: "10px", minHeight: "50px" }}
      >
        <h2>Hello</h2>
        <p>what is up?</p>
      </div>
      <p>Box Height: {boxHeight}px</p>
    </div>
  );
};

export default AutoResizableBox;
