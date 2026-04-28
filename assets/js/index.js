/* ── Rolling phrase ─────────────────────────────────────── */
const phrases = ['Comece agora', 'Treine com a gente', 'VEM SER BLACK!'];
const phraseEl = document.getElementById('hero-phrase');
let phraseIdx = 0;
setInterval(() => {
  const old = phraseEl.querySelector('span');
  old.classList.add('out');
  phraseIdx = (phraseIdx + 1) % phrases.length;
  setTimeout(() => {
    old.remove();
    const next = document.createElement('span');
    next.textContent = phrases[phraseIdx];
    phraseEl.appendChild(next);
  }, 400);
}, 3200);

/* ── Plan detail toggle ─────────────────────────────────── */
function toggleDetail(btn) {
  const body = btn.nextElementSibling;
  const arrow = btn.querySelector('.arrow');
  const open = body.classList.toggle('open');
  arrow.textContent = open ? '▲' : '▾';
}
