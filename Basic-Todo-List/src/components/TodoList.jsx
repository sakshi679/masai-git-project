import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") return;
    setTasks([...tasks, trimmedInput]);
    setInput("");
  };

  const clearAll = () => setTasks([]);

  return (
    <div>
      <input
        type="text"
        placeholder="Add new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: 8, width: "70%", marginRight: 8 }}
      />
      <button onClick={addTask} style={{ padding: "8px 16px" }}>
        Add Task
      </button>

      <button onClick={clearAll} style={{ padding: "8px 16px", marginLeft: 8 }}>
        Clear All
      </button>

      {tasks.length === 0 ? (
        <p style={{ marginTop: 20, fontStyle: "italic" }}>No tasks available.</p>
      ) : (
        <ul style={{ marginTop: 20 }}>
          {tasks.map((task, i) => (
            <li key={i} style={{ marginBottom: 6 }}>
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
