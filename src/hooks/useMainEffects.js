import { useEffect } from 'react'

// This hook contains the exact same logic that lived in JS/main.js.
// It is run inside a useEffect (once the Home page's DOM has been
// rendered) instead of on the 'DOMContentLoaded' event, since React
// mounts the markup after that event has already fired.
export default function useMainEffects() {
  useEffect(() => {
    //  Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    function handleThemeToggle() {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
      updateThemeIcon(next);
    }
    themeToggle?.addEventListener('click', handleThemeToggle);

    function updateThemeIcon(theme) {
      if (!themeIcon) return;

      if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    }

    //  Sticky Navbar
    const navbar = document.getElementById('mainNav');

    function handleNavbarScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', handleNavbarScroll);

    //   Active Nav Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function setActiveNavLink() {
      const scrollPos = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    window.addEventListener('scroll', setActiveNavLink);

    // Close Mobile Menu on Link Click
    const navMenu = document.getElementById('navMenu');
    const navToggler = document.querySelector('.navbar-toggler');

    function handleNavLinkClick() {
      if (navMenu.classList.contains('show')) {
        navToggler.click();
      }
    }
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick);
    });

    //  Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach(el => revealObserver.observe(el));

    //  Skill Progress Bars Animation
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('data-progress');
            entry.target.style.width = progress + '%';
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBars.forEach(bar => skillObserver.observe(bar));

    //  Back to Top Button
    const backToTop = document.getElementById('backToTop');

    function handleBackToTopVisibility() {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }
    window.addEventListener('scroll', handleBackToTopVisibility);

    function handleBackToTopClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    backToTop.addEventListener('click', handleBackToTopClick);

    //  Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    function handleContactSubmit(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        shakeForm();
        return;
      }

      if (!isValidEmail(email)) {
        document.getElementById('email').focus();
        shakeForm();
        return;
      }

      // Placeholder: connect to Formspree, EmailJS, or your backend here
      formSuccess.classList.add('show');
      contactForm.reset();

      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    }
    contactForm.addEventListener('submit', handleContactSubmit);

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function shakeForm() {
      contactForm.style.animation = 'none';
      contactForm.offsetHeight;
      contactForm.style.animation = 'shake 0.4s ease';
      setTimeout(() => {
        contactForm.style.animation = '';
      }, 400);
    }

    //  Typing Effect for Hero Title
    const typedText = document.querySelector('.typed-text');
    const phrases = [
      'Front-End Web Developer',
      'UI Enthusiast',
      'Creative Coder'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;
    let typeTimeoutId;

    function typeEffect() {
      const current = phrases[phraseIndex];

      if (isDeleting) {
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 80;
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typeSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      typeTimeoutId = setTimeout(typeEffect, typeSpeed);
    }

    const startTypingTimeoutId = setTimeout(typeEffect, 1500);

    //  Smooth Scroll for Anchor Links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    function handleAnchorClick(e) {
      const anchor = e.currentTarget;
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Shake animation for form validation
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        20% { transform: translateX(-8px); }
        40% { transform: translateX(8px); }
        60% { transform: translateX(-4px); }
        80% { transform: translateX(4px); }
      }
    `;
    document.head.appendChild(shakeStyle);

    // Cleanup on unmount
    return () => {
      themeToggle.removeEventListener('click', handleThemeToggle);
      window.removeEventListener('scroll', handleNavbarScroll);
      window.removeEventListener('scroll', setActiveNavLink);
      navLinks.forEach(link => link.removeEventListener('click', handleNavLinkClick));
      window.removeEventListener('scroll', handleBackToTopVisibility);
      backToTop.removeEventListener('click', handleBackToTopClick);
      contactForm.removeEventListener('submit', handleContactSubmit);
      anchorLinks.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
      clearTimeout(startTypingTimeoutId);
      clearTimeout(typeTimeoutId);
      document.head.removeChild(shakeStyle);
    };
  }, []);
}
