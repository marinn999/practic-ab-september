import React from "react";

const ToDoListItem = ({ id, handleDelete, todo }) => {
  return (
    <li>
      <input type="checkbox" />
      <span>{todo}</span>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default ToDoListItem;
