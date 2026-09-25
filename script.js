// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const railList = document.querySelector('.rail-list');

if (navToggle && railList) {
  navToggle.addEventListener('click', () => {
    const isOpen = railList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  railList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      railList.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll-spy: highlight the current section in the rail nav
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.rail-list a');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));
}
