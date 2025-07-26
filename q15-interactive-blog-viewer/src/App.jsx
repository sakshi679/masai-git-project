import { useState } from "react";

const blogs = [
  { title: "Mastering JavaScript", content: "JavaScript is a powerful language for web development." },
  { title: "React in Indian Startups", content: "React is widely used in many Indian tech companies." },
  { title: "Career in Web Development", content: "Explore job roles and growth in web development." },
];

function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📝 Blog Titles</h1>

      {blogs.map((blog, index) => (
        <h3
          key={index}
          onClick={() => setSelectedBlog(blog)}
          style={{ cursor: "pointer", color: "yellow" }}
        >
          {blog.title}
        </h3>
      ))}

      <hr />

      {selectedBlog ? (
        <div>
          <h2>{selectedBlog.title}</h2>
          <p>{selectedBlog.content}</p>
        </div>
      ) : (
        <p style={{ fontStyle: "italic" }}>Select a blog to read 📖</p>
      )}
    </div>
  );
}

export default App;
