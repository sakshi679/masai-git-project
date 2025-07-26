import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("Original Title");
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setTitle("Title changed using React");
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleChange}>Change Title (React)</button>
      <p>DOM Updates: <span>{count}</span></p>
    </div>
  );
}

export default App;
