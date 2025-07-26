import { useState } from "react";
import UserCard from "./UserCard";

function UserList({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [err, setErr] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (!/^[1-9]\d*$/.test(form.age)) e.age = "Age must be positive";
    return e;
  };

  const handleAdd = () => {
    const v = validate();
    if (Object.keys(v).length) {
      setErr(v);
      return;
    }
    setUsers((u) => [...u, { ...form, age: Number(form.age) }]);
    setForm({ name: "", email: "", age: "" });
    setErr({});
  };

  return (
    <>
      <div className="form">
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {err.name && <span className="error">{err.name}</span>}

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {err.email && <span className="error">{err.email}</span>}

        <input
          placeholder="Age"
          type="number"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        {err.age && <span className="error">{err.age}</span>}

        <button onClick={handleAdd}>Add User</button>
      </div>

      <div className="list">
        {users.map((u, i) => (
          <UserCard key={i} {...u} />
        ))}
      </div>
    </>
  );
}

export default UserList;
