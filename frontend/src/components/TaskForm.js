import { useState } from "react";
import "./TaskItem.css";
const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title });
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit" className="addtask">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
