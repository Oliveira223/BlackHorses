/* ── Ticker infinite loop ───────────────────────────────── */
(function () {
  const track = document.querySelector('.ticker-track');
  if (!track) return;

  track.style.animation = 'none';

  const origItems = Array.from(track.children);

  function start() {
    // Mede a largura de um set ANTES de clonar, com a fonte já renderizada
    const setWidth = origItems.reduce((sum, el) => sum + el.offsetWidth, 0);

    if (setWidth === 0) { setTimeout(start, 100); return; }

    // Clona o suficiente para cobrir 4× a tela
    const copies = Math.ceil((window.innerWidth * 4) / setWidth) + 1;
    for (let i = 0; i < copies; i++) {
      origItems.forEach(item => track.appendChild(item.cloneNode(true)));
    }

    let pos = 0;
    let prev = null;
    const SPEED = 60; // px/s

    function animate(ts) {
      if (prev !== null) {
        pos += (ts - prev) / 1000 * SPEED;
        if (pos >= setWidth) pos -= setWidth;
        track.style.transform = `translateX(${-pos}px)`;
      }
      prev = ts;
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(start);
  } else {
    setTimeout(start, 300);
  }
})();

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
