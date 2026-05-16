(function () {
  const page = location.pathname.split('/').pop() || 'index.html';

  const sports = {
    'boxe.html':     'Boxe',
    'hapkido.html':  'Hapkido',
    'muaythai.html': 'Muay Thai',
  };

  const sport   = sports[page];
  const heading = sport ? `Vem treinar<br>${sport}.` : `Vem ser<br>Black.`;
  const sub     = sport
    ? 'Agende uma aula experimental e sinta a diferença na sua primeira sessão.'
    : 'Formamos não só lutadores — mas pessoas mais disciplinadas, resilientes e confiantes.';

  document.body.insertAdjacentHTML('beforeend', `
    <section id="cta-band">
      <div>
        <div class="cta-heading">${heading}</div>
        <p class="cta-sub">${sub}</p>
      </div>
      <div class="cta-links">
        <a href="https://wa.me/5551982005084" target="_blank" rel="noopener" class="cta-btn-wpp">
          <img src="assets/icons/whatsapp_icon.png" alt="">
          Fale pelo WhatsApp
        </a>
        <a href="https://www.instagram.com/blackhorses.artesmarciais/" target="_blank" rel="noopener" class="cta-btn-ig">
          <img src="assets/icons/inst_icon.png" alt="">
          @blackhorses.artesmarciais
        </a>
      </div>
    </section>
  `);
}());
