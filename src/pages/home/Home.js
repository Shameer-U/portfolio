import './home.css';
import my from'../../images/banner.jpg'

const Home = () => {
  return (
    <>
       <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Shameer U Shahul</div>
                    <div className="text-3">And I'm a Web Developer</div>
                </div>
            </div>
        </section>

        <section className="about">
            <div className="container">
                <div className="about-title">
                    <h2>About me</h2>
                </div>
                <div className="about-content">
                    <div className="left">
                        <img src={my} alt="" />
                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="skills">
            <div className="container">
                <div className="skills-title">
                    <h2>Skills (or skills & experiences)</h2>
                </div>
                <div class="skills-content"> 
                     <div><img src={my} width="20px" height="20px"/> <span>ReactJS</span></div>
                     <div><img src={my} width="20px" height="20px"/> <span>JAVASCRIPT</span></div>
                     <div><img src={my} width="20px" height="20px"/> <span>HTML</span></div>
                     <div><img src={my} width="20px" height="20px"/> <span>CSS</span></div>
                     <div><img src={my} width="20px" height="20px"/> <span>SASS</span></div>
                </div>
            </div>
        </section>

        <section className="projects">
            <div className="container">
                <div class="projects-title">
                    <h2>Projects</h2>
                </div>
                <div className="projects-content"> 
                     <div className="project">
                        <img src={my} />
                        <div className="project-details">
                            <h4>App name</h4>
                            <p> sort description</p>
                            <div className="links">
                                <a href="#">View demo</a>
                                <a href="#">View code</a>
                            </div>
                        </div>
                     </div>
                     <div className="project">
                        <img src={my} />
                        <div className="project-details">
                            <h4>App name</h4>
                            <p> sort description</p>
                            <div className="links">
                                <a href="#">View demo</a>
                                <a href="#">View code</a>
                            </div>
                        </div>
                     </div>
                     <div className="project">
                        <img src={my} />
                        <div className="project-details">
                            <h4>App name</h4>
                            <p> sort description</p>
                            <div className="links">
                                <a href="#">View demo</a>
                                <a href="#">View code</a>
                            </div>
                        </div>
                     </div>
                     <div className="project">
                        <img src={my} />
                        <div className="project-details">
                            <h4>App name</h4>
                            <p> sort description</p>
                            <div className="links">
                                <a href="#">View demo</a>
                                <a href="#">View code</a>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>

        <section className="contact">
            <div className="container">
                <div className="contact-title">
                    <h2>Contact</h2>
                </div>
                <div class="contact-content"> 
                    <div class="contact-detail">
                        <i class="fas fa-user"></i>
                        <div>Shameer U Shahul</div>
                    </div>
                    <div class="contact-detail">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>Ullattil, S.Bathery</div>
                    </div>
                    <div class="contact-detail">
                        <i class="fas fa-envelope"></i>
                        <div>shameer@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home;