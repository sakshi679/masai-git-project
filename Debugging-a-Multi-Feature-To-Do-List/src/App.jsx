import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Debugging a Multi-Feature To-Do List</h1>
      <TodoList />
    </div>
  );
}
