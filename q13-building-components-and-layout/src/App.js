import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Card title="Welcome" content="This is the welcome card." />
        <Card title="Second Card" content="This is another reusable card." />
        <Card title="Reusable Component" content="You can reuse this card anywhere." />
      </div>
      <Footer />
    </div>
  );
}

export default App;
