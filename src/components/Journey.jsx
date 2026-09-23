export default function Journey() {
  return (
    <section id="journey" className="section-padding bg-secondary">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">My Path</span>
          <h2 className="section-title">My Development Journey</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Continuously learning and growing as a developer</p>
        </div>

        <div className="timeline reveal">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-step">01</span>
              <h4>Started HTML &amp; CSS</h4>
              <p>Learned the fundamentals of web structure and styling — building my first web pages.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-step">03</span>
              <h4>Started JavaScript</h4>
              <p>Began learning programming logic — variables, functions, loops, and conditions.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-step">05</span>
              <h4>Bootstrap Framework</h4>
              <p>Started building responsive projects faster with Bootstrap's grid and components.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-step">06</span>
              <h4>Git &amp; GitHub</h4>
              <p>Learned version control and started hosting my projects on GitHub.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-step">07</span>
              <h4>React Development</h4>
              <p>Started building reusable components and interactive interfaces with React.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-step">08</span>
              <h4>Tailwind CSS</h4>
              <p>Learned utility-first styling to create consistent and responsive user interfaces.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot active">
              <div className="pulse-ring"></div>
            </div>
            <div className="timeline-content glass-card active-card">
              <span className="timeline-step">09</span>
              <h4>Continuing to Grow</h4>
              <p>Improving my Front-End Development skills every day — building better projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
