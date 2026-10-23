export default function CommunicationSkills() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">Communication</span>
          <h2 className="section-title">How I Work With People</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Skills that help me share ideas and work well in a team
          </p>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-sm-6 col-lg-4 reveal">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-language"></i>
              </div>
              <h4>Multilingual</h4>
              <p className="skills-card-paragraph">
                Fluent in three languages, so I can communicate with clients and
                teammates from different backgrounds.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="90"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-ear-listen"></i>
              </div>
              <h4>Active Listening</h4>
              <p>
                I listen first to understand requirements and feedback before I
                respond.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="85"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-2">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-users"></i>
              </div>
              <h4>Teamwork</h4>
              <p>
                Collaborating through shared tools and clear handoffs to reach a
                common goal.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="85"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-pen-nib"></i>
              </div>
              <h4>Written Communication</h4>
              <p>
                Clear emails, documentation, and commit messages that are easy
                to follow.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="80"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-1">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-chalkboard-user"></i>
              </div>
              <h4>Presenting Ideas</h4>
              <p>
                Explaining technical topics in simple terms to both technical
                and non-technical audiences.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="75"></div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 reveal delay-2">
            <div className="skill-card glass-card">
              <div className="skill-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Adaptability</h4>
              <p>
                Adjusting my communication style to the person, the situation,
                and the feedback I receive.
              </p>
              <div className="skill-bar">
                <div className="skill-progress" data-progress="80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
