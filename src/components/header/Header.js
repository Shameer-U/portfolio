import './header.css';

const Header = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">Portfolio</div>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <div className="nav-btn">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
  );
}

export default Header;