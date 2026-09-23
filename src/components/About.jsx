import saforaImg from '../assets/images/safora.jpeg'
import cvFile from '../assets/cv/SAFORA MIRZAEE.pdf'

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Crafting Digital Experiences</h2>
          <div className="title-underline"></div>
        </div>

        <div className="row align-items-center g-5 mt-2">
          <div className="col-lg-5 reveal">
            <div className="about-image-wrapper">
              <div className="about-image-frame">
                <img src={saforaImg} alt="Safora Mirzaee" className="about-image" />
              </div>
              <div className="about-image-accent"></div>
            </div>
          </div>

          <div className="col-lg-7 reveal delay-1">
            <h3 className="about-heading">Passionate Front-End Web Developer</h3>
            <p className="about-text">
              I'm a passionate Front-End Web Developer who loves creating modern, responsive, and user-friendly websites. I enjoy turning creative ideas into functional digital experiences using clean, well-structured code.
            </p>
            <p className="about-text">
              I work primarily with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Tailwind</strong>, and <strong>Bootstrap</strong>, and I'm continuously learning and improving my development skills. Every project I build is an opportunity to grow and refine my craft.
            </p>
            <p className="about-text">
              My goal is to become a highly skilled professional Front-End Developer and build amazing, high-quality web experiences that make a lasting impression.
            </p>

            <div className="about-cards row g-3 mt-4">
              <div className="col-sm-6">
                <div className="info-card glass-card">
                  <i className="fas fa-code info-icon"></i>
                  <h4>Clean Code</h4>
                  <p>Writing organized, readable, and maintainable code.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="info-card glass-card">
                  <i className="fas fa-mobile-alt info-icon"></i>
                  <h4>Responsive Design</h4>
                  <p>Websites that look great on every device.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="info-card glass-card">
                  <i className="fas fa-rocket info-icon"></i>
                  <h4>Always Learning</h4>
                  <p>Continuously improving my skills and knowledge.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="info-card glass-card">
                  <i className="fas fa-palette info-icon"></i>
                  <h4>Modern UI</h4>
                  <p>Creating beautiful and intuitive interfaces.</p>
                </div>
              </div>
            </div>

            {/* Replace href with your CV: assets/cv/safora-mirzaee-cv.pdf */}
            <a href={cvFile} className="btn btn-primary-custom mt-4" download>
              <i className="fas fa-download me-2"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
