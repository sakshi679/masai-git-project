function Card({ title, children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      marginBottom: "16px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Card;
