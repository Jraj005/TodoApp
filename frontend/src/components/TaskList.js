// src/components/TaskList.js

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdate, onDelete }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <TaskItem
        key={task._id}
        task={task}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

export default TaskList;
