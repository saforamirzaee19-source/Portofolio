export default function ToolsSkills() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">Tools</span>
          <h2 className="section-title">Tools I Use Every Day</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            The software that helps me design, build, test, and ship faster
          </p>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-sm-6 col-lg-4 reveal">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4>VS Code</h4>
              <p>
                My main editor, set up with extensions, snippets, and shortcuts
                for fast coding.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="90"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-arrow-pointer"></i>
              </div>
              <h4>Cursor</h4>
              <p>
                An AI-powered editor I use to write, refactor, and understand
                code faster.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="80"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-2">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fab fa-npm"></i>
              </div>
              <h4>npm</h4>
              <p>
                Installing packages, managing dependencies, and running project
                scripts.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="75"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fab fa-chrome"></i>
              </div>
              <h4>Chrome DevTools</h4>
              <p>
                Debugging layouts, inspecting network requests, and checking
                performance.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="80"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-paper-plane"></i>
              </div>
              <h4>Postman</h4>
              <p>
                Testing and exploring APIs before connecting them to the front
                end.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="60"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-2">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h4>Vite</h4>
              <p>
                Starting React projects quickly with fast builds and instant hot
                reload.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
