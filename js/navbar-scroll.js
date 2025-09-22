// navbar-scroll.js
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {  // triggers after scrolling 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
