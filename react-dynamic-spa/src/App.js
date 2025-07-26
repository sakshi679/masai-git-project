import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('Home');

  const handleClick = (newPage) => {
    setPage(newPage);
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '30px',
      fontSize: '20px',
      cursor: 'pointer',
    },
    active: {
      fontWeight: 'bold',
      color: 'blue',
    },
    content: {
      fontSize: '24px',
      padding: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      display: 'inline-block',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.nav}>
        <div
          onClick={() => handleClick('Home')}
          style={page === 'Home' ? styles.active : {}}
        >
          Home
        </div>
        <div
          onClick={() => handleClick('About')}
          style={page === 'About' ? styles.active : {}}
        >
          About
        </div>
        <div
          onClick={() => handleClick('Contact')}
          style={page === 'Contact' ? styles.active : {}}
        >
          Contact
        </div>
      </div>

      <div style={styles.content}>
        {page === 'Home' && <p>🏡 Welcome to Home</p>}
        {page === 'About' && <p>📘 About Us</p>}
        {page === 'Contact' && <p>📞 Contact Us</p>}
      </div>
    </div>
  );
}

export default App;
