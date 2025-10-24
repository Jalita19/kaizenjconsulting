// Mobile dropdown toggle
document.querySelectorAll('.drop-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    if (window.innerWidth <= 860) {
      e.preventDefault();
      const menu = btn.nextElementSibling;
      menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
  });
});

// Fade-in divisions on scroll
const divisions = document.querySelectorAll('.division-row');
function revealDivisions() {
  const trigger = window.innerHeight * 0.85;
  divisions.forEach(div => {
    const top = div.getBoundingClientRect().top;
    if (top < trigger) div.classList.add('show');
  });
}
window.addEventListener('scroll', revealDivisions);
window.addEventListener('load', revealDivisions);
