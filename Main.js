/* ═══════════════════════════════════════════
   PORTFOLIO — Wilver Manuel Yena Garcia
   main.js
═══════════════════════════════════════════ */

// ─── PAGE NAVIGATION ───
function showPage(id, btn) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active', 'visible');
  });
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));

  const page = document.getElementById('page-' + id);
  page.classList.add('active');
  btn.classList.add('active');

  setTimeout(() => {
    page.classList.add('visible');
    if (id === 'habilidades') animateBars();
  }, 20);
}

// ─── SKILL BARS ───
function animateBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const val = bar.dataset.fill;
    setTimeout(() => { bar.style.width = val + '%'; }, 300);
  });
}

// ─── PARTICLES ───s
(function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 3;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 14 + 8}s;
      animation-delay: ${Math.random() * 12}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(p);
  }
})();

// ─── CONTACT FORM ───
function sendMsg() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Init: show first page
setTimeout(() => document.getElementById('page-sobre').classList.add('visible'), 20);