import './header.css';
import { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navLinkCondition, setnavLinkCondition] = useState('disabled');

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset == 0 ? setIsScrolled(false) : setIsScrolled(true);
    }

    return () => (window.onscroll = null);
  },[])

  const manageNavLinks = () => {
    setnavLinkCondition((prevState) => { return prevState == "active" ? "disabled" : "active"});
  }

  return (
    <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="logo">Portfolio</div>
            <ul className={"nav-links " + navLinkCondition }>
                <li className="closeLink" onClick={manageNavLinks}><MdClose/></li>
                <li onClick={manageNavLinks}><a href="#about">About</a></li>
                <li onClick={manageNavLinks}><a href="#skills">Skills</a></li>
                <li onClick={manageNavLinks}><a href="#projects">Projects</a></li>
                <li onClick={manageNavLinks}><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-btn" onClick={manageNavLinks}>
                <FaBars className="barIcon" />
            </div>
        </div>
    </nav>
  );
}

export default Header;