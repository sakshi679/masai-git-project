function UserCard({ name, email, age }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{age}</p>
    </div>
  );
}

export default UserCard;
