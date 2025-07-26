import React from 'react';

function Card({ title, content }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      width: '250px',
      textAlign: 'center'
    }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Card;
