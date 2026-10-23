import '../styles/services.css'
import useServicesEffects from '../hooks/useServicesEffects.js'

export default function Services() {
  useServicesEffects();

  return (
    <>
      {/* Loading Screen */}
      <div id="preloader">
        <div id="loader-logo">
          techno<span>.</span>
        </div>
        <div className="loader-ring"></div>
      </div>

      {/* Header Section Started in here */}
      <header>
        {/* Logo */}
        <div id="logo">
          <h1>
            techno
            <img src="images/ai-icon.png" alt="AI Icon" />
          </h1>
        </div>

        {/* Navigation */}
        <nav id="nav-menu">
          <ul>
            <li><a href="./index.html">Home</a></li>
            <li><a href="./services.html">Services</a></li>
            <li><a href="./portfolio.html">Portfolio</a> </li>
            <li> <a href="./testimonials.html">Testimonials</a> </li>
            <li><a href="#team">Team</a></li>
            <li className="has-dropdown"><a href="#">Menu</a>
              <ul>
                <li> <a href="#">About</a> </li>
                <li> <a href="#">Pricing</a> </li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li> <a href="#">Blogs</a></li>
                <li> <a href="#">Blog Detail Page</a> </li>
              </ul>
            </li>
            <li> <a href="#">News</a> </li>
          </ul>
        </nav>

        {/* Burger Menu Icon */}
        <button id="hamburger" aria-label="Toggle menu"> <i className="fa-solid fa-bars"></i> </button>

        {/* Dark / Light Mode */}
        <button id="dark" aria-label="Toggle dark mode"> <i className="fa-solid fa-sun"></i> </button>
        <button id="quote-btn"> GET QUOTES </button>
      </header>

      {/* Main Content Started in here */}
      <main>
        <div className="header-2">
          <a href="index.html">Home  </a>
          <p>/ Our Services </p>
        </div>

        {/* Services Section */}
        <section id="services">
          <div className="shado">
            <div className="title">
              <h1>Services We Offer</h1>
              <p className="ser-par">
                Explore our creative solutions that make a real difference.
              </p>

              {/* Services boxes are created with JS */}
              <div id="services-container"></div>
            </div>
          </div>
        </section>
        {/* End of Services Section */}

        {/* ================= FOOTER START ================= */}
        <footer id="footer">
          <div className="footer-container">
            {/* Logo + Description */}
            <div className="footer-logo">
              <h1>
                techno
                <img src="images/ai-icon.png" alt="AI Icon" />
              </h1>

              <p>
                We provide innovative solutions tailored to your
                needs. Join us in transforming your digital landscape.
              </p>

              {/* Social Media */}
              <div className="social-media-footer">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <i className="fa-brands fa-x-twitter"></i>
                  <i className="fa-brands fa-square-facebook"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="footer-box">
              <h2>Our Services</h2>
              <ul>
                <li>Web Design</li>
                <li>App Development</li>
                <li>Cloud Solutions</li>
                <li>SEO Services</li>
              </ul>
            </div>

            {/* Information */}
            <div className="footer-box">
              <h2>Information</h2>
              <ul>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Get In Touch + Newsletter */}
            <div className="footer-box contact-box">
              <h2>Get In Touch</h2>
              <ul className="contact-list">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>1234 Business St., City, Country</span>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i>
                  <span>+123 456 7890</span>
                </li>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <span>support@example.com</span>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="newsletter">
                <h2>Newsletter</h2>
                <p>
                  Subscribe to our newsletter for the latest updates!
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Email Address"
                  />
                  <button type="submit">
                    <i className="fa-regular fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="copy">
            <p>
              © 2026 Your Company.
              Designed with passion by
              <span>Miss Safora Mirzaee</span>
            </p>
          </div>
        </footer>
        {/* ================= FOOTER END ================= */}
        {/* End of Footer */}
      </main>

      {/* JavaScript logic lives in useServicesEffects.js */}
    </>
  )
}
