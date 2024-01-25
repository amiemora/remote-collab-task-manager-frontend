import React from "react";

const ListItem = React.memo(({ item, onRemove }) => {
  console.log(`Rendering ListItem ${item.id}`);

  return (
    <div>
      <span>{item.text}</span>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
});

export default ListItem;
