export default function ToolsSkills() {
  const tools = [
    {
      icon: "fas fa-comments",
      title: "Twilio",
      text: "Building and managing SMS, voice, and communication services with Twilio.",
      progress: 85,
    },
    {
      icon: "fab fa-git-alt",
      title: "Git & GitHub",
      text: "Managing versions, branches, repositories, and collaborative development.",
      progress: 85,
    },
    {
      icon: "fas fa-paper-plane",
      title: "Postman",
      text: "Testing, exploring, and managing APIs before connecting them to the frontend.",
      progress: 80,
    },
    {
      icon: "fas fa-database",
      title: "Firebase",
      text: "Working with authentication, databases, and backend services for web projects.",
      progress: 75,
    },
    {
      icon: "fab fa-npm",
      title: "npm",
      text: "Installing packages, managing dependencies, and running project scripts.",
      progress: 80,
    },
    {
      icon: "fas fa-code",
      title: "VS Code",
      text: "My primary editor for coding, debugging, and managing software projects.",
      progress: 90,
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">Tools</span>
          <h2 className="section-title">Tools I Use Every Day</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            The tools I use to develop, test, and manage software projects
          </p>
        </div>

        <div className="row g-4 mt-2">
          {tools.map((tool, index) => (
            <div
              className={`col-sm-6 col-lg-4 reveal ${
                index % 3 === 1 ? "delay-1" : index % 3 === 2 ? "delay-2" : ""
              }`}
              key={tool.title}
            >
              <div className="skill-card glass-card">
                <div className="skill-icon">
                  <i className={tool.icon}></i>
                </div>

                <h4>{tool.title}</h4>
                <p>{tool.text}</p>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    data-progress={tool.progress}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
