import React, { useState } from "react";

const PRIORITY_ORDER = { High: 3, Medium: 2, Low: 1 };

function AdvancedTaskManager() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [completionFilter, setCompletionFilter] = useState("All");

  // Add new task
  const addTask = () => {
    if (title.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      completed: false,
    };
    setTasks((prev) => sortTasks([...prev, newTask]));
    setTitle("");
    setPriority("Medium");
  };

  // Sort tasks by priority descending
  const sortTasks = (tasksArray) => {
    return tasksArray.sort((a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]);
  };

  // Toggle completion status
  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(sortTasks(updatedTasks));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter tasks based on filters
  const filteredTasks = tasks.filter((task) => {
    const priorityMatch = priorityFilter === "All" || task.priority === priorityFilter;
    const completionMatch =
      completionFilter === "All" ||
      (completionFilter === "Completed" && task.completed) ||
      (completionFilter === "Incomplete" && !task.completed);
    return priorityMatch && completionMatch;
  });

  return (
    <div>
      {/* Add Task Form */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: 8, width: "60%", marginRight: 8 }}
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{ padding: 8, marginRight: 8 }}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask} style={{ padding: "8px 16px" }}>
          Add Task
        </button>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 20 }}>
        <label>
          Priority Filter:{" "}
          <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </label>

        <label style={{ marginLeft: 20 }}>
          Completion Filter:{" "}
          <select value={completionFilter} onChange={(e) => setCompletionFilter(e.target.value)}>
            <option>All</option>
            <option>Completed</option>
            <option>Incomplete</option>
          </select>
        </label>
      </div>

      {/* Task List */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredTasks.length === 0 ? (
          <li>No tasks found.</li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              style={{
                marginBottom: 10,
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 4,
                backgroundColor: task.priority === "High" ? "#ffe6e6" : "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              <span
                style={{ cursor: "pointer", flexGrow: 1 }}
                onClick={() => toggleComplete(task.id)}
                title="Click to toggle complete"
              >
                [{task.priority}] {task.title}
              </span>
              <button onClick={() => deleteTask(task.id)} style={{ marginLeft: 10 }}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default AdvancedTaskManager;
