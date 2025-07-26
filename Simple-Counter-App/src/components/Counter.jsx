import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Count: {count}</h2>

      <button onClick={increment} style={{ padding: "8px 16px", marginRight: 8 }}>
        Increment
      </button>
      <button onClick={decrement} style={{ padding: "8px 16px", marginRight: 8 }}>
        Decrement
      </button>
      <button onClick={reset} style={{ padding: "8px 16px" }}>
        Reset
      </button>

      {count === 10 && <p style={{ color: "green", marginTop: 20 }}>Goal Reached!</p>}
    </div>
  );
}

export default Counter;
