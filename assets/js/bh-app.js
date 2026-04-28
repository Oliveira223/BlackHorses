/* ═══════════════════════════════════════════════════════════
   BH-APP.JS — JavaScript compartilhado Black Horses
   ═══════════════════════════════════════════════════════════ */

/* ── Loading screen ─────────────────────────────────────────── */
function bhInitLoading() {
  const loading = document.getElementById('bh-loading');
  if (!loading) return;

  // Fill bar
  const bar = loading.querySelector('.load-bar-fill');
  let progress = 0;
  const fillInterval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) { progress = 100; clearInterval(fillInterval); }
    if (bar) bar.style.width = progress + '%';
  }, 80);

  // Hide after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (bar) bar.style.width = '100%';
      setTimeout(() => {
        loading.classList.add('hide');
        setTimeout(() => loading.remove(), 500);
      }, 300);
    }, 600);
  });

  // Fallback
  setTimeout(() => {
    loading.classList.add('hide');
    setTimeout(() => loading.remove(), 500);
  }, 3500);
}

/* ── Nav scroll ─────────────────────────────────────────────── */
function bhInitNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Hamburger ──────────────────────────────────────────────── */
function bhInitHamburger() {
  const btn  = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    btn.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* ── Reveal on scroll ───────────────────────────────────────── */
function bhInitReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.10 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ── Active nav link ────────────────────────────────────────── */
function bhInitActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav .nav-links a:not(.nav-cta)').forEach(link => {
    const href = link.getAttribute('href').split('#')[0];
    if (href === page) link.classList.add('active');
  });
}

/* ── Init all ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  bhInitLoading();
  bhInitNav();
  bhInitHamburger();
  bhInitReveal();
  bhInitActiveNav();
});
