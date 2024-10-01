import React from 'react';
import Navbar from './navbar'; // Ensure the file name matches the case
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <section id="home" style={{ height: '100vh', backgroundColor: '#f4f4f4', marginTop: '70px' }}>Home Section</section>
      <section id="about" style={{ height: '100vh', backgroundColor: '#eaeaea', marginTop: '70px' }}>About Section</section>
      <section id="services" style={{ height: '100vh', backgroundColor: '#f4f4f4', marginTop: '70px' }}>Services Section</section>
      <section id="carrier" style={{ height: '100vh', backgroundColor: '#eaeaea', marginTop: '70px' }}>Carrier Section</section>
      <section id="contact" style={{ height: '100vh', backgroundColor: '#f4f4f4', marginTop: '70px' }}>Contact Section</section>
    </div>
  );
}

export default App;
