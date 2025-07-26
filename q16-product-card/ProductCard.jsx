import React from "react";

function ProductCard({ name, price, image, discount }) {
  return (
    <div style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
      <img src={image} alt={name} width="200" />
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      {discount && <p style={{color: "green"}}>Discount: {discount}%</p>}
    </div>
  );
}

export default ProductCard;
