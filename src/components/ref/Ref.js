import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";

/**
 * This is a component showing a real exmaple of the useRef hook.
 * useRef is used for handling a complex UI component.
 * Imagine you have a scenario where you want to create a resizable and draggable component,
 * and you want to use useRef to interact with the DOM elements.
 */
const Ref = () => {
  const componentRef = React.useRef(null);

  const handleResize = (event, { size }) => {
    // Update the width and height of the component
    const { width, height } = size;
    componentRef.current.style.width = `${width}px`;
    componentRef.current.style.height = `${height}px`;
  };

  return (
    <Draggable>
      <Resizable width={200} height={100} onResize={handleResize}>
        <div
          ref={componentRef}
          style={{ border: "1px solid #ccc", padding: "10px" }}
        >
          Resizable and Draggable Component
        </div>
      </Resizable>
    </Draggable>
  );
};

export default Ref;
