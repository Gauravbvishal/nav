import Navbar from './navbar';
import './App.css';

function App() {
  return (
    <div>
      
      <Navbar />
      {/* Rest of your content */}
      <section id="home" style={{ height: '100vh', backgroundColor: '#f4f4f4' }}>Home Section</section>
      <section id="about" style={{ height: '100vh', backgroundColor: '#eaeaea' }}>About Section</section>
      <section id="services" style={{ height: '100vh', backgroundColor: '#f4f4f4' }}>Services Section</section>
      <section id="carrier" style={{ height: '100vh', backgroundColor: '#eaeaea' }}>Carrier Section</section>
      <section id="contact" style={{ height: '100vh', backgroundColor: '#f4f4f4' }}>Contact Section</section>
    </div>
  );
}

export default App;
