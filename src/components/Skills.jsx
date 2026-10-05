export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">My Skills</span>
          <h2 className="section-title">Technologies I Work With</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Tools and technologies I use to bring ideas to life</p>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-sm-6 col-lg-3 reveal">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fab fa-html5"></i></div>
              <h4>HTML5</h4>
              <p>Semantic markup and accessible structure for modern web pages.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="85"></div></div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fab fa-css3-alt"></i></div>
              <h4>CSS3</h4>
              <p>Styling, animations, Flexbox, Grid, and responsive layouts.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="80"></div></div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 reveal delay-2">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fab fa-js"></i></div>
              <h4>JavaScript</h4>
              <p>Interactive features, DOM manipulation, and dynamic content.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="70"></div></div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 reveal delay-3">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fab fa-bootstrap"></i></div>
              <h4>Bootstrap</h4>
              <p>Rapid prototyping with responsive grid and components.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="75"></div></div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 reveal">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fab fa-git-alt"></i></div>
              <h4>Git</h4>
              <p>Version control for tracking changes and collaboration.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="65"></div></div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fab fa-github"></i></div>
              <h4>GitHub</h4>
              <p>Hosting projects and showcasing my development work.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="70"></div></div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 reveal">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fab fa-react"></i></div>
              <h4>React</h4>
              <p>Building reusable components and responsive single-page interfaces.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="70"></div></div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fas fa-wind"></i></div>
              <h4>Tailwind CSS</h4>
              <p>Creating consistent, responsive designs with utility-first styling.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="65"></div></div>
            </div>
          </div>
        </div>
      </div>

       <div className="col-sm-6 col-lg-3 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon"><i className="fas fa-wind"></i></div>
              <h4>Basic Python</h4>
              <p>Making progressive in my programming journey.</p>
              <div className="skill-bar"><div className="skill-progress" data-progress="65"></div></div>
            </div>
          </div>
    </section>
  )
}
