import UserList from "./components/UserList";
import "./index.css";

function App() {
  const initialUsers = [
    { name: "Sakshi Pandey", email: "sakshi@example.com", age: 21 },
  ];

  return (
    <div className="App">
      <h1>User List</h1>
      <UserList initialUsers={initialUsers} />
    </div>
  );
}

export default App;
