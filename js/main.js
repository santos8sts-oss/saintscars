document.addEventListener('DOMContentLoaded', () => {
  // Load header.html
  fetch('header.html')
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.text();
    })
    .then(text => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const nav = doc.querySelector('nav');
      const placeholder = document.getElementById('header-include');
      if (nav && placeholder) {
        placeholder.parentNode.insertBefore(nav, placeholder);
        placeholder.remove();
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu) {
          navToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
        }
        // Set active nav link based on current page
        setActiveNavLink();
      } else {
        console.warn('No <nav> found in header.html or placeholder missing');
      }
    })
    .catch(err => console.error('Error loading header:', err));

  // Load footer.html
  fetch('footer.html')
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.text();
    })
    .then(text => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const footer = doc.querySelector('footer');
      const placeholder = document.getElementById('footer-include');
      if (footer && placeholder) {
        placeholder.parentNode.insertBefore(footer, placeholder);
        placeholder.remove();
      } else {
        console.warn('No <footer> found in footer.html or placeholder missing');
      }
    })
    .catch(err => console.error('Error loading footer:', err));
});

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (currentPage === 'index.html' || currentPage === '') {
    // Use Intersection Observer for section-based active link on index page
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => link.classList.remove('active'));
          
          const sectionId = entry.target.id;
          const activeLink = document.querySelector(`a[href="index.html#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
  } else if (currentPage === 'contact.html') {
    navLinks.forEach(link => link.classList.remove('active'));
    const contactLink = document.querySelector('a[href="contact.html"]');
    if (contactLink) {
      contactLink.classList.add('active');
    }
  }
}
