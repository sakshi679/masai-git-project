import React, { useState } from "react";
import ProductCard from "./ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    discount: ""
  });

  const [errors, setErrors] = useState({});

  function validate(data) {
    let newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!data.price || data.price <= 0) newErrors.price = "Price must be positive.";
    if (!data.image.includes("http")) newErrors.image = "Image must be a valid URL.";
    if (data.discount && (data.discount < 0 || data.discount > 100)) {
      newErrors.discount = "Discount must be between 0 and 100.";
    }

    return newErrors;
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      setProducts([...products, formData]);
      setFormData({ name: "", price: "", image: "", discount: "" });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h1>Product Card App</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}

        <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
        {errors.price && <p>{errors.price}</p>}

        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        {errors.image && <p>{errors.image}</p>}

        <input name="discount" placeholder="Discount %" value={formData.discount} onChange={handleChange} />
        {errors.discount && <p>{errors.discount}</p>}

        <button type="submit">Add Product</button>
      </form>

      <div>
        {products.map((prod, index) => (
          <ProductCard key={index} {...prod} />
        ))}
      </div>
    </div>
  );
}

export default App;
