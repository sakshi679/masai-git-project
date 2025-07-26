import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task"
        style={{ padding: 8, width: "70%", marginRight: 8 }}
      />
      <button onClick={addTask} style={{ padding: "8px 16px" }}>
        Add Task
      </button>

      <ul style={{ listStyleType: "none", padding: 0, marginTop: 20 }}>
        {tasks.map((task, i) => (
          <li
            key={i}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 8,
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          >
            <span
              onClick={() => toggleComplete(i)}
              style={{ cursor: "pointer", flexGrow: 1 }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(i)} style={{ marginLeft: 10 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
