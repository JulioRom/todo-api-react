import { useState, useEffect } from "react";
import { fetchTasks, createTask, deleteTask, updateTask } from "../service/api";
import TaskList from "./TaskList";
import InputField from "./InputField";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const username = "julio";

  useEffect(() => {
    const initializeTasks = async () => {
      try {
        const data = await fetchTasks(username);
        console.log("Fetched tasks:", data);
        setTasks(data);
      } catch (err) {
        setError("Failed to initialize tasks. Please try again later.");
        console.error(err);
      }
    };
    initializeTasks();
  }, []);

  const handleAddTask = async (label) => {
    const newTask = { label, is_done: false };
    try {
      const addedTask = await createTask(username, newTask);
      setTasks([...tasks, addedTask]);
    } catch (err) {
      setError("Failed to add task. Please try again.");
      console.error(err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      const updatedTasks = tasks.filter(task => task.id !== id);
      setTasks(updatedTasks);
    } catch (err) {
      setError("Failed to delete task. Please try again.");
      console.error(err);
    }
  };

  const handleUpdateTask = async (id) => {
    try {
      const taskToUpdate = tasks.find(task => task.id === id);
      const updatedTask = { ...taskToUpdate, is_done: !taskToUpdate.is_done };

      await updateTask(id, updatedTask);

      const updatedTasks = tasks.map(task =>
        task.id === id ? updatedTask : task
      );

      setTasks(updatedTasks);
    } catch (err) {
      setError("Failed to update task. Please try again.");
      console.error(err);
    }
  };

  const handleClearTasks = async () => {
    try {
      for (const task of tasks) {
        await deleteTask(task.id);
      }
      setTasks([]);
    } catch (err) {
      setError("Failed to clear tasks. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Todo List</h1>
      {error && <p className="text-danger text-center">{error}</p>}
      <InputField onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
      <button className="btn btn-danger mt-3" onClick={handleClearTasks}>
        Clear All Tasks
      </button>
    </div>
  );
};

export default Todo;