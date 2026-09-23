import nadiaBrand from '../assets/images/nadia-brand.png'
import luxuryHouse from '../assets/images/luxury-house.png'
import calculatorImg from '../assets/images/calculator.png'
import patientHub from '../assets/images/patientHub.png'

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A selection of my learning and practice projects</p>
        </div>

        <div className="row g-4 mt-2">
          {/* Project 1: Nadia Brand */}
          <div className="col-md-6 col-lg-4 reveal">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src={nadiaBrand} alt="Nadiya Brand — Afghan Fashion Website" />
                <div className="project-overlay">
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                  <a href="https://github.com/yourusername/nadiya-brand" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="project-content">
                <h4>Nadia Brand</h4>
                <p>A modern Afghan fashion website with elegant design and rich features.</p>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span><span>JavaScript</span><span>Bootstrap</span>
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
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                  <a href="https://github.com/saforamirzaee19-source/Modern-Architechture.git" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="project-content">
                <h4>Modern Architecture</h4>
                <p>A sleek architecture website focused on beautiful design and responsive layouts.</p>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span>
                </div>
                <ul className="project-features">
                  <li>Modern layout</li>
                  <li>Responsive design</li>
                  <li>Creative sections</li>
                  <li>Professional UI</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Project 3: JavaScript Calculator */}
          <div className="col-md-6 col-lg-4 reveal delay-2">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src={calculatorImg} alt="JavaScript Calculator" />
                <div className="project-overlay">
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                  <a href="https://github.com/yourusername/js-calculator" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="project-content">
                <h4>JavaScript Calculator</h4>
                <p>A stylish calculator app with interactive buttons and dynamic calculations.</p>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span><span>JavaScript</span>
                </div>
                <ul className="project-features">
                  <li>Basic math operations</li>
                  <li>Interactive buttons</li>
                  <li>Dynamic calculations</li>
                  <li>Clean UI</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Project 4: Bootstrap Landing Page */}
          <div className="col-md-6 col-lg-4 reveal">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Bootstrap Landing Page" />
                <div className="project-overlay">
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                  <a href="https://github.com/yourusername/bootstrap-landing" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="project-content">
                <h4>Bootstrap Landing Page</h4>
                <p>A responsive landing page built with Bootstrap components and grid system.</p>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span><span>Bootstrap</span>
                </div>
              </div>
            </article>
          </div>

          {/* Project 5: Interactive Form */}
          <div className="col-md-6 col-lg-4 reveal delay-1">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="Interactive Form Project" />
                <div className="project-overlay">
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                  <a href="https://github.com/yourusername/interactive-form" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="project-content">
                <h4>Interactive Form</h4>
                <p>A form with JavaScript validation, dynamic feedback, and smooth UX.</p>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span><span>JavaScript</span>
                </div>
              </div>
            </article>
          </div>

          {/* Project 6: Hospital Finder */}
          <div className="col-md-6 col-lg-4 reveal delay-2">
            <article className="project-card glass-card">
              <div className="project-image">
                <img src={patientHub} alt="Hospital doctor and clinic finder website" />
                <div className="project-overlay">
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></a>
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
                </div>
              </div>
              <div className="project-content">
                <h4>My PatientHub</h4>
                <p>A healthcare platform that helps users find doctors and clinics quickly.</p>
                <div className="project-tags">
                  <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Tailwind</span>
                </div>
                <ul className="project-features">
                  <li>Find a doctor</li>
                  <li>Find a clinic</li>
                  <li>Responsive interface</li>
                  <li>Interactive search experience</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
