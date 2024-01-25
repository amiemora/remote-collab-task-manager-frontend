import React from "react";

// Reducer function to manage the cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

/**
 * Example using useReducer for managing the state of a simple shopping cart.
 * Actions to add items to the cart, remove items, and update the quantity of items.
 * useReducer allows for optimization by memoizing action handlers, preventing unnecessary re-renders of components.
 */
const Redcuer = () => {
  // Initial state for the shopping cart
  const initialState = {
    items: [],
  };

  // useReducer returns the current state and a dispatch function
  const [cartState, dispatch] = React.useReducer(cartReducer, initialState);

  // Action creators
  const addItem = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const updateQuantity = (item, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, quantity } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartState.items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => updateQuantity(item, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => updateQuantity(item, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Available Items</h3>
        <button onClick={() => addItem({ id: 1, name: "Item 1", quantity: 1 })}>
          Add Item 1
        </button>
        <button onClick={() => addItem({ id: 2, name: "Item 2", quantity: 1 })}>
          Add Item 2
        </button>
        <button onClick={() => addItem({ id: 3, name: "Item 3", quantity: 1 })}>
          Add Item 3
        </button>
      </div>
    </div>
  );
};

export default Redcuer;
