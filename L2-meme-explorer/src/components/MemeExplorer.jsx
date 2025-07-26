import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MemeExplorer() {
  const [memes, setMemes] = useState([]);
  const [filteredMemes, setFilteredMemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [filterBySize, setFilterBySize] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  // Apply theme class to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fetch memes on button click
  const loadMemes = () => {
    setLoading(true);
    setError(null);

    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => {
        if (res.data.success) {
          setMemes(res.data.data.memes);
          setFilteredMemes(res.data.data.memes);
        } else {
          setError("Failed to fetch memes");
        }
      })
      .catch(() => setError("Failed to fetch memes"))
      .finally(() => setLoading(false));
  };

  // Filter, search, sort whenever inputs change
  useEffect(() => {
    let tempMemes = [...memes];

    // Filter by size
    if (filterBySize) {
      tempMemes = tempMemes.filter((m) => m.width > 500 || m.height > 500);
    }

    // Search by name case-insensitive
    if (search.trim() !== "") {
      tempMemes = tempMemes.filter((m) =>
        m.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort memes
    if (sortBy === "name") {
      tempMemes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "width") {
      tempMemes.sort((a, b) => a.width - b.width);
    }

    setFilteredMemes(tempMemes);
  }, [memes, search, sortBy, filterBySize]);

  // Reset all filters
  const resetFilters = () => {
    setSearch("");
    setSortBy("");
    setFilterBySize(false);
    setFilteredMemes(memes);
  };

  return (
    <div className={`app-container ${theme}`} style={{ padding: 20 }}>
      <h1>Meme Explorer</h1>

      <div className="controls" style={{ marginBottom: 20 }}>
        <button onClick={loadMemes} disabled={loading} style={{ marginRight: 10 }}>
          {loading ? "Loading..." : "Load Memes"}
        </button>

        <button onClick={resetFilters} disabled={loading || memes.length === 0}>
          Reset
        </button>

        <label style={{ marginLeft: 20 }}>
          Search:{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={loading || memes.length === 0}
          />
        </label>

        <label style={{ marginLeft: 20 }}>
          Sort By:{" "}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            disabled={loading || memes.length === 0}
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="width">Width</option>
          </select>
        </label>

        <label style={{ marginLeft: 20 }}>
          Filter Size {"(width > 500 or height > 500)"}:{" "}
          <input
            type="checkbox"
            checked={filterBySize}
            onChange={(e) => setFilterBySize(e.target.checked)}
            disabled={loading || memes.length === 0}
          />
        </label>

        <label style={{ marginLeft: 20 }}>
          Theme:{" "}
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </label>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && filteredMemes.length === 0 && memes.length > 0 && (
        <p>No memes found.</p>
      )}

      <div
        className="meme-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
          gap: 20,
        }}
      >
        {filteredMemes.map((meme) => (
          <div
            key={meme.id}
            className="meme-card"
            style={{
              border: "1px solid #ccc",
              borderRadius: 5,
              padding: 10,
              backgroundColor: theme === "light" ? "#fff" : "#333",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            <img
              src={meme.url}
              alt={meme.name}
              style={{ width: "100%", height: 150, objectFit: "cover", marginBottom: 10 }}
            />
            <h3>{meme.name}</h3>
            <p>
              Width: {meme.width}, Height: {meme.height}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
