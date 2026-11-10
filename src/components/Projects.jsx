import nadiaBrand from "../assets/images/nadia-brand.png";
import luxuryHouse from "../assets/images/luxury-house.png";
import patientHub from "../assets/images/patientHub.png";
import awakeShop from "../assets/images/awake-shop.png";
import technologyImg from "../assets/images/AI.png";
import architectureDashboardImg from "../assets/images/modern.png";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A selection of my learning and practice projects
          </p>
        </div>

        <div className="row g-4 mt-2">
          {/* Project 1: Nadia Brand */}
          <div className="col-md-6 col-lg-4 reveal">
            <article className="project-card glass-card">
              <div className="project-image">
                <img
                  src={nadiaBrand}
                  alt="Nadiya Brand — Afghan Fashion Website"
                />
                <div className="project-overlay">
                  <a
                    href="https://hijabcollection-sigma.vercel.app/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/saforamirzaee19-source/Hijab-Collection-Nadia-brand"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h4>Nadia Brand</h4>
                <p>
                  A modern Afghan fashion website with elegant design and rich
                  features.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <ul className="project-features">
                  <li>Responsive design</li>
                  <li>Hero image slider</li>
                  <li>Gallery &amp; testimonials</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Project 2: Modern Architecture */}
          <div className="col-md-6 col-lg-4 reveal delay-1">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src={luxuryHouse} alt="Modern Architecture Website" />
                <div className="project-overlay">
                  <a
                    href="https://saforamirzaee19-source.github.io/Modern-Architechture/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/saforamirzaee19-source/Modern-Architechture"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h4>Modern Architecture</h4>
                <p>
                  An elegant architecture portfolio showcasing contemporary
                  homes through immersive photography and a responsive layout.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
                <ul className="project-features">
                  <li>Contemporary home showcase</li>
                  <li>Immersive visual design</li>
                  <li>Responsive page layout</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Project 3: React Architecture app */}
          <div className="col-md-6 col-lg-4 reveal delay-2">
            <article className="project-card glass-card">
              <div className="project-image">
                <img
                  src={architectureDashboardImg}
                  alt="Luxe architecture project management dashboard"
                />
                <div className="project-overlay">
                  <a
                    href="https://modern-architechture-app-modern-arc.vercel.app/dashboard"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/saforamirzaee19-source/Modern-Architechture-App/tree/main/Modern%20Archtechture"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h4>Luxe Project Hub</h4>
                <p>
                  An architecture project dashboard for tracking budgets,
                  progress, schedules, site visits, and team activity.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Tailwind CSS</span>
                </div>
                <ul className="project-features">
                  <li>Project and budget overview</li>
                  <li>Progress and phase tracking</li>
                  <li>Team and site activity</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Project 4: Awake Shop */}
          <div className="col-md-6 col-lg-4 reveal">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src={awakeShop} alt="Awake Shop" />
                <div className="project-overlay">
                  <a
                    href="https://saforamirzaee19-source.github.io/Online-Shop/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/saforamirzaee19-source/Online-Shop"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h4>Awake Shop</h4>
                <p>
                  A responsive online storefront with a clean product-focused
                  layout and interactive shopping experience.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <ul className="project-features">
                  <li>Product-focused storefront</li>
                  <li>Responsive layout</li>
                  <li>Interactive interface</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Project 5: Interactive Form */}
          <div className="col-md-6 col-lg-4 reveal delay-1">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src={technologyImg} alt="Techno AI IT solutions website" />
                <div className="project-overlay">
                  <a
                    href="https://saforamirzaee19-source.github.io/Technology/#home"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/saforamirzaee19-source/Technology"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h4>Techno AI</h4>
                <p>
                  An AI-themed IT solutions website presenting services and
                  digital solutions in a bold, responsive design.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>JavaScript</span>
                </div>
                <ul className="project-features">
                  <li>IT services landing page</li>
                  <li>AI-inspired visual design</li>
                  <li>Responsive navigation</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Project 6: Hospital Finder */}
          <div className="col-md-6 col-lg-4 reveal delay-2">
            <article className="project-card glass-card">
              <div className="project-image">
                <img
                  src={patientHub}
                  alt="Hospital doctor and clinic finder website"
                />
                <div className="project-overlay">
                  <a
                    href="https://my-pationt-hub-hbc.vercel.app/"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a
                    href="https://github.com/saforamirzaee19-source/MyPationtHub-HBC"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h4>My PatientHub</h4>
                <p>
                  A healthcare platform that helps people search for doctors and
                  clinics through a responsive, interactive interface.
                </p>
                <div className="project-tags">
                  <span>React</span>
                  <span>CSS</span>
                  <span>Tailwind</span>
                </div>
                <ul className="project-features">
                  <li>Find a doctor, Find a clinic</li>
                  <li>Appointments, Chat</li>
                  <li>Responsive interface</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
