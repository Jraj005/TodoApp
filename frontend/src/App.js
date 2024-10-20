// src/App.js

import { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "./services/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async (task) => {
    await addTask(task);
    loadTasks();
  };

  const handleUpdate = async (id, task) => {
    await updateTask(id, task);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="App">
      <Header />
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
      <Footer />
    </div>
  );
};

export default App;
