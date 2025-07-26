import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("green");

  const toggleColor = () => {
    setColor(prev => (prev === "green" ? "yellow" : "green"));
  };

  const buttonStyle = {
    backgroundColor: color,
    color: color === "green" ? "white" : "black",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  };

  return (
    <div style={{ padding: "20px" }}>
      <button style={buttonStyle} onClick={toggleColor}>
        Color: {color}
      </button>
      <p>Current Color: {color}</p>
    </div>
  );
}

export default App;
