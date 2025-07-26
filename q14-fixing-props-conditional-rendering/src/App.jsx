import UserProfile from './UserProfile';

function App() {
  const user = {
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com"
  };

  return (
    <div>
      <h1>Welcome</h1>
      <UserProfile user={user} />
    </div>
  );
}

export default App;
