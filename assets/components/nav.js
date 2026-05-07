(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  const a = (href, label, cls) => {
    const active = page === href ? ' class="active"' : (cls ? ` class="${cls}"` : '');
    return `<a href="${href}"${active}>${label}</a>`;
  };

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="nav">
      <a href="index.html" class="nav-logo">
        <div class="nav-logo-name">Black Horses</div>
        <div class="nav-logo-sub">Artes Marciais</div>
      </a>
      <div class="nav-links">
        ${a('sobre.html',   'Quem Somos')}
        ${a('espacos.html', 'Espaços')}
        ${a('atletas.html', 'Atletas')}
        <a href="index.html#planos">Planos</a>
        <a href="index.html#horarios">Horários</a>
        <a href="https://wa.me/5551982005084" target="_blank" class="nav-cta">Aula Experimental</a>
      </div>
      <button id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    </nav>
    <div id="mobile-menu">
      <a href="index.html">Home</a>
      ${a('sobre.html',   'Quem Somos')}
      ${a('espacos.html', 'Espaços')}
      ${a('atletas.html', 'Atletas')}
      <a href="index.html#planos">Planos</a>
      <a href="index.html#horarios">Horários</a>
      <a href="https://wa.me/5551982005084" target="_blank" class="mob-cta">Aula Experimental</a>
    </div>
  `);
}());
