fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // Now that nav is in the DOM, run your toggle logic
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
          navLinks.classList.remove('active');
        }
      });

      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');
      }
    } else {
      console.error('Hamburger button or nav-links not found!');
    }
  });
