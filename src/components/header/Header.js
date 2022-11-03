import './header.css';

const Header = () => {
  return (
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">Portfolio</div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <div class="nav-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
  )
}

export default Header;