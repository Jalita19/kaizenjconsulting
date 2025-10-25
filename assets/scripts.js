/* ===============================
   📱 MOBILE NAV TOGGLE
=============================== */
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    menuToggle.classList.toggle('active');
  });
}

/* ===============================
   📂 MOBILE DROPDOWN TOGGLE (for future dropdown menus)
=============================== */
document.querySelectorAll('.drop-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      const menu = btn.nextElementSibling;
      if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
      }
    }
  });
});

/* ===============================
   ✨ SCROLL FADE-IN ANIMATION
=============================== */
const divisions = document.querySelectorAll('.division-row, .division-card, .about-container');
function revealDivisions() {
  const trigger = window.innerHeight * 0.85;
  divisions.forEach(div => {
    const top = div.getBoundingClientRect().top;
    if (top < trigger) div.classList.add('show');
  });
}
window.addEventListener('scroll', revealDivisions);
window.addEventListener('load', revealDivisions);

/* ===============================
   📬 NETLIFY CONTACT FORM HANDLER
=============================== */
const contactForm = document.querySelector('form[name="contact"]');
const successMsg = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(contactForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        contactForm.reset();
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      })
      .catch(() => alert('⚠️ There was an error. Please try again.'));
  });
}
