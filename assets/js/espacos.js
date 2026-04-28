/* ── Lightbox ───────────────────────────────────────────── */
const fotos = [...document.querySelectorAll('.foto-item img')].map(i => i.src);
let idx = 0;
const lb    = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');

document.querySelectorAll('.foto-item').forEach((item, i) => {
  item.addEventListener('click', () => { idx = i; lbImg.src = fotos[i]; lb.classList.add('open'); });
});
document.getElementById('lb-close').addEventListener('click', () => lb.classList.remove('open'));
document.getElementById('lb-prev').addEventListener('click', () => {
  idx = (idx - 1 + fotos.length) % fotos.length;
  lbImg.src = fotos[idx];
});
document.getElementById('lb-next').addEventListener('click', () => {
  idx = (idx + 1) % fotos.length;
  lbImg.src = fotos[idx];
});
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });
