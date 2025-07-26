import React, { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function fetchProducts() {
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data); // log data to console
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <button onClick={fetchProducts} disabled={loading} style={{ padding: "10px 20px" }}>
        {loading ? "Loading..." : "Fetch Products"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: 20 }}>
          Error: {error}
        </p>
      )}
    </div>
  );
}
