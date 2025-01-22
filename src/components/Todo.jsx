import { useState, useEffect } from "react";
import { fetchTasks, createTask, deleteTask, updateTask, createUser } from "../service/api";
import TaskList from "./TaskList";
import InputField from "./InputField";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  useEffect(() => {
    if (username) {
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
    }
  }, [username]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000); // El mensaje de error se cierra después de 3 segundos
      return () => clearTimeout(timer);
    }
  }, [error]);

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

  const handleCreateUser = async () => {
    try {
      await createUser(newUsername);
      setUsername(newUsername);
      setNewUsername("");
      const data = await fetchTasks(newUsername);
      setTasks(data);
    } catch (err) {
      console.log(err.message)
      if (err.message.includes({"message":"User already exists."})) {
        setUsername(newUsername);
        setNewUsername("");
        const data = await fetchTasks(newUsername);
        setTasks(data);
      } else {
        setError("Failed to create or switch user. Please try again.");
        console.error(err);
      }
    }
  };


  return (
    <div className="container mt-5">
      <h1 className="text-center">TODO LIST</h1>
      {error && <p className="text-danger text-center">{error}</p>}

      <div className="mb-3">
        <h5>Create or Switch User</h5>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleCreateUser}>
          Create or Set User
        </button>
      </div>

      <div className="mb-3">
        <h6>Current User: {username}</h6>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <InputField onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onUpdateTask={handleUpdateTask} onDeleteTask={handleDeleteTask} />
      <button className="btn btn-danger mt-3" onClick={handleClearTasks}>
        Clear All Tasks
      </button>
    </div>
  );
};

export default Todo;