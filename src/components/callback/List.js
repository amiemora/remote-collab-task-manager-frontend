import React, { useState, useCallback } from "react";
import ListItem from "./ListItem";

/**
 * By using useCallback, we optimize the performance of the handleRemove function,
 * which is especially beneficial when passing it as a prop to memoized child components like ListItem.
 * This ensures that unnecessary re-renders are avoided when the list is updated.
 */
const List = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ]);

  const handleRemove = useCallback(
    (itemId) => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    },
    [] // Empty dependency array ensures the callback is memoized and doesn't change between renders
  );

  return (
    <div>
      <h2>List</h2>
      {items.map((item) => (
        <ListItem key={item.id} item={item} onRemove={handleRemove} />
      ))}
    </div>
  );
};

export default List;
