/* ── Lightbox ───────────────────────────────────────────── */
const compPhotos = [...document.querySelectorAll('.comp-photo img')].map(i => i.src);
let lbIdx = 0;
const lb    = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');

document.querySelectorAll('.comp-photo').forEach((card, i) => {
  card.addEventListener('click', () => { lbIdx = i; openLb(); });
});
document.getElementById('lightbox-close').addEventListener('click', () => lb.classList.remove('open'));
document.getElementById('lightbox-prev').addEventListener('click', () => {
  lbIdx = (lbIdx - 1 + compPhotos.length) % compPhotos.length;
  lbImg.src = compPhotos[lbIdx];
});
document.getElementById('lightbox-next').addEventListener('click', () => {
  lbIdx = (lbIdx + 1) % compPhotos.length;
  lbImg.src = compPhotos[lbIdx];
});
lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('open'); });

function openLb() { lbImg.src = compPhotos[lbIdx]; lb.classList.add('open'); }
