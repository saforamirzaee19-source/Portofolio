export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 hero-content reveal">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Safora Mirzaee</h1>
            <h2 className="hero-title">
              <span className="typed-text">Front-End Web Developer</span>
              <span className="cursor-blink">|</span>
            </h2>
            <p className="hero-description">
              I create modern, responsive, and visually engaging websites using HTML, CSS, JavaScript, React, Tailwind CSS, and Bootstrap. Passionate about turning creative ideas into functional digital experiences.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary-custom">View My Work</a>
              <a href="#contact" className="btn btn-outline-custom">Contact Me</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/saforamirzaee19-source" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/safora-mirzaee-0832ab423?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="mailto:saforamirzaee19@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
          <div className="col-lg-6 hero-visual reveal delay-1">
            <div className="hero-card glass-card">
              <div className="code-window">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="code-filename">developer.js</span>
                </div>
                <pre className="code-body"><code><span className="code-keyword">const</span> <span className="code-var">developer</span> = {'{'}
  <span className="code-prop">name</span>: <span className="code-string">"Safora Mirzaee"</span>,
  <span className="code-prop">role</span>: <span className="code-string">"Front-End Developer"</span>,
  <span className="code-prop">skills</span>: [<span className="code-string">"HTML"</span>, <span className="code-string">"CSS"</span>, <span className="code-string">"JS"</span>],
  <span className="code-prop">passion</span>: <span className="code-string">"Building beautiful websites"</span>,
  <span className="code-prop">status</span>: <span className="code-string">"Always learning"</span>
{'}'};</code></pre>
              </div>
              <div className="floating-badge badge-1"><i className="fab fa-html5"></i> HTML5</div>
              <div className="floating-badge badge-2"><i className="fab fa-css3-alt"></i> CSS3</div>
              <div className="floating-badge badge-3"><i className="fab fa-js"></i> JS</div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span className="scroll-text">Scroll</span>
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  )
}
