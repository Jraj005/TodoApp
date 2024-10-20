// src/components/TaskItem.js

import React from "react";
import "./TaskItem.css"; // Create a new CSS file for individual task styling

const TaskItem = ({ task, onUpdate, onDelete }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          onUpdate(task._id, { ...task, completed: !task.completed })
        }
        className="checkitem"
      />
      <input
        type="text"
        value={task.title}
        onChange={(e) => onUpdate(task._id, { ...task, title: e.target.value })}
        className="task-title"
      />
      <button onClick={() => onDelete(task._id)} className="delete-button">
        Remove
      </button>
    </li>
  );
};

export default TaskItem;
