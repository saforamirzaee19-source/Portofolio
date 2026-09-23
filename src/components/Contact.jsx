export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Have a project or idea? I'd love to hear from you!</p>
        </div>

        <div className="row g-5 mt-2">
          <div className="col-lg-5 reveal">
            <div className="contact-info">
              <h3>Have a project or idea?<br />Let's work together!</h3>
              <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>

              <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-link-item glass-card">
                  <div className="contact-link-icon"><i className="fas fa-envelope"></i></div>
                  <div>
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">saforamirzaee19@gmail.com</span>
                  </div>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link-item glass-card">
                  <div className="contact-link-icon"><i className="fab fa-github"></i></div>
                  <div>
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">https://github.com/saforamirzaee19-source</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-link-item glass-card">
                  <div className="contact-link-icon"><i className="fab fa-linkedin-in"></i></div>
                  <div>
                    <span className="contact-link-label">LinkedIn</span>
                    <span className="contact-link-value">https://www.linkedin.com/in/safora-mirzaee-0832ab423/</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 reveal delay-1">
            <form className="contact-form glass-card" id="contactForm" noValidate>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control custom-input" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control custom-input" id="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control custom-input" id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary-custom w-100">
                    <i className="fas fa-paper-plane me-2"></i> Send Message
                  </button>
                </div>
              </div>
              <div className="form-success" id="formSuccess">
                <i className="fas fa-check-circle"></i> Thank you! Your message has been sent successfully.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
