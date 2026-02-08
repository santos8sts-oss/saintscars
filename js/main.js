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
