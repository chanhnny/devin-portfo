import { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-content" data-aos="fade-down">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#resources">Resources</a>
        <a href="#footer">More</a>
      </div>
    </nav>
  );
};

export default Navbar;