import './header.css';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset == 0 ? setIsScrolled(false) : setIsScrolled(true);
    }

    return () => (window.onscroll = null);
  },[])

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="logo">Portfolio</div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
  );
}

export default Header;