import BackgroundVideo from './videos/arc-react-vid.mp4';
import Navbar from './components/navbar';
import About from './components/about';
import Experience from './components/experience';
import Resources from './components/resources';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css'


function App() {

  useEffect(() => {
  AOS.init({ duration: 1200, once: true });
}, []);

  return (
    <div>
      <Navbar />
      <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <div className="content-overlay"></div>

      <div className="hero">
        <div className="hero-content">
          <p className="hero-text" data-aos="fade-right">
            Hello, I'm Devin.</p>
            <p className="hero-text2" data-aos="fade-left">
            I'm a Software Engineer. More so, an Innovator.
          </p>
        </div>
      </div>

      <About />
      <Experience />
      <Resources />
      <Footer />
    </div>
  )
}

export default App
