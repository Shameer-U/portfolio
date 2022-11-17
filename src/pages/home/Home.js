import { useEffect, useState } from 'react';
import './home.css';
import bannerImg from'../../images/banner.jpg';
import reactLogo from'../../logos/react.png';
import reduxLogo from'../../logos/redux.png';
import javaScriptLogo from'../../logos/javascript.png';
import htmlLogo from'../../logos/html.png';
import cssLogo from'../../logos/css.png';
import sassLogo from'../../logos/sass.png';
import { FaMapMarkerAlt, FaUserAlt, FaEnvelope, FaPhoneAlt, FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Home = () => {
    const [navLinkCondition, setnavLinkCondition] = useState('disabled');

    const manageNavLinks = () => {
        setnavLinkCondition((prevState) => { return prevState == "active" ? "disabled" : "active"});
    }

  return (
    <> 
       <div className='main-container'>
            <div className='side-section'>
                <section className='sidebar'>
                    <div className="container">
                        <div className="profile">
                            <div className="img">
                                <img src={bannerImg} alt="" />
                            </div>
                            <div className='name'>
                                 <h2>Shameer U Shahul</h2>
                            </div>
                            <div className='important-link'>
                                  <FaGithub className='link'/> <FaLinkedin className='link'/>
                            </div>
                        </div>
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
                </section>
            </div>
            <div className='main-section'>
                <section className="banner">
                    <div className='mask'>
                        <div className="container">
                            <div className="banner-content">
                                <div className="text-1">Hello, my name is</div>
                                <div className="text-2">Shameer U Shahul</div>
                                <div className="text-3">and I'm a Web Developer</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about" id="about">
                    <div className="container">
                        <div className="title">
                            <h2>About</h2>
                        </div>
                        <div className="about-content">
                            <div className="right">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                                <a href="#">Download CV</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skills" id="skills">
                    <div className="container">
                        <div className="title">
                            <h2>Skills (or Skills & Experiences)</h2>
                        </div>
                        <div className="skills-content"> 
                            <div><img src={reactLogo} width="50px" height="50px" className="skill-logo"/> <span className="skill-name">ReactJS</span></div>
                            <div><img src={reduxLogo} width="20px" height="20px" className="skill-logo"/> <span className="skill-name">Redux</span></div>
                            <div><img src={javaScriptLogo} width="20px" height="20px" className="skill-logo"/> <span className="skill-name">JavaScript</span></div>
                            <div><img src={htmlLogo} width="20px" height="20px" className="skill-logo"/> <span className="skill-name">HTML</span></div>
                            <div><img src={cssLogo} width="20px" height="20px" className="skill-logo"/> <span className="skill-name">CSS</span></div>
                            <div><img src={sassLogo} width="20px" height="20px" className="skill-logo"/> <span className="skill-name">Sass</span></div>
                        </div>
                    </div>
                </section>

                <section className="projects" id="projects">
                    <div className="container">
                        <div className="title">
                            <h2>Projects</h2>
                        </div>
                        <div className="projects-content"> 
                            <div className="project">
                                <img src={bannerImg} />
                                <div className="project-details">
                                    <h4>App name</h4>
                                    <p> Short description</p>
                                    <div>
                                        <p>Technologies / Tools used :</p>
                                        <p>ReactJS, Redux, JavaScript, CSS </p>
                                    </div>
                                    <div className="links">
                                        <a href="#">View demo</a>
                                        <a href="#">View code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <img src={bannerImg} />
                                <div className="project-details">
                                    <h4>App name</h4>
                                    <p> short description</p>
                                    <div className="links">
                                        <a href="#">View demo</a>
                                        <a href="#">View code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <img src={bannerImg} />
                                <div className="project-details">
                                    <h4>App name</h4>
                                    <p> short description</p>
                                    <div className="links">
                                        <a href="#">View demo</a>
                                        <a href="#">View code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="project">
                                <img src={bannerImg} />
                                <div className="project-details">
                                    <h4>App name</h4>
                                    <p> short description</p>
                                    <div>
                                        <p> </p>
                                    </div>
                                    <div className="links">
                                        <a href="#">View demo</a>
                                        <a href="#">View code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="contact" id="contact">
                    <div className="container">
                        <div className="title">
                            <h2>Contact</h2>
                        </div>
                        <div className="contact-content">
                            <div className="contact-detail">
                                <div className="info">
                                    <FaUserAlt />
                                    <div>Shameer U Shahul</div>
                                </div>
                                <div className="info">
                                    <FaMapMarkerAlt />
                                    <div>Ullattil (H), Sulthan Bathery, Wayanad, Kerala, India, 673 592</div>
                                </div>
                                <div className="info">
                                    <FaEnvelope />
                                    <div>shameerushahul@gmail.com</div>
                                </div>
                                <div className="info">
                                    <FaPhoneAlt />
                                    <div>9539311252, 7907689151</div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Home;