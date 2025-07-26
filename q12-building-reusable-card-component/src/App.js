import Card from "./components/Card";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Card title="Welcome!">
        <p>This is a reusable Card component 🚀</p>
      </Card>

      <Card title="Second Card">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>
    </div>
  );
}

export default App;
