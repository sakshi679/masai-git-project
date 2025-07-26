import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Basic Todo List</h1>
      <TodoList />
    </div>
  );
}
