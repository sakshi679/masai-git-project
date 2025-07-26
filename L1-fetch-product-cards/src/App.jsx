import React, { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function loadProducts() {
    setLoading(true);
    setError(null);

    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError(err.message);
        setProducts([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function clearProducts() {
    setProducts([]);
    setError(null);
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <button onClick={loadProducts} disabled={loading} style={{ marginRight: 10 }}>
        {loading ? "Loading..." : "Load Products"}
      </button>
      <button onClick={clearProducts} disabled={loading || products.length === 0}>
        Clear Products
      </button>

      {error && <p style={{ color: "red", marginTop: 20 }}>{error}</p>}

      {!loading && products.length === 0 && !error && (
        <p style={{ marginTop: 20 }}>No products available.</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
          marginTop: 20,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: 5,
              padding: 10,
              textAlign: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ height: 150, objectFit: "contain", marginBottom: 10 }}
            />
            <h3 style={{ fontSize: 16, height: 50 }}>{product.title}</h3>
            <p style={{ fontWeight: "bold" }}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
