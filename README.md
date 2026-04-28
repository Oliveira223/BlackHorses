# Black Horses Artes Marciais — Design System

## Visão Geral

**Black Horses Artes Marciais** é uma escola de artes marciais fundada em 2019, localizada na Zona Sul de Porto Alegre (RS), Brasil. Conduzida pelo casal Bruna Nascimento e Mestre Ulysses Nascimento, a escola oferece modalidades de Muay Thai, Hapkido, Boxe, Hapkido Kids/Teens, além de cursos especiais de defesa pessoal. Com mais de 200 alunos formados desde sua fundação e sede própria desde 2023, a escola tem presença ativa em competições com pódios frequentes.

**Contatos:**
- Instagram: [@blackhorses.artesmarciais](https://www.instagram.com/blackhorses.artesmarciais/)
- WhatsApp: (51) 9 9989-4785
- Email: blackhorsesartesmarciais@gmail.com
- Endereço: R. Cel. Aristídes, 180 - Cristal, Porto Alegre/RS

**Fontes consultadas:**
- Repositório GitHub: https://github.com/Oliveira223/bHorses (branch: main)
  - `index.html`, `sobre.html`, `Boxe.html`, `Hapkido.html`, `muaythai.html`, `espacos.html`, `atletas.html`
  - `style.css`, `style_info.css`, `style_modalidades.css`
  - `app.js`, `sobre.js`
- Instagram: @blackhorsesartesmarciais

---

## Produtos / Superfícies

| Produto | Descrição |
|---|---|
| **Website (desktop + mobile)** | Site principal em HTML/CSS/JS puro, dark theme, responsivo. Páginas: Home, Sobre, Boxe, Hapkido, Muay Thai, Espaços, Atletas, Eventos |

---

## CONTENT FUNDAMENTALS

### Idioma e Tom
- **Idioma:** Português Brasileiro
- **Voz:** Primeira pessoa do plural ("nosso", "nossa", "seguimos") quando fala da escola; segunda pessoa informal ("você", "treine") para o aluno
- **Tom:** Energético, apaixonado, acolhedor e direto. Sério quando fala de compromisso e disciplina, mas caloroso e próximo com o aluno
- **Frases de impacto:** Curtas, em caps. Ex: `"VEM SER BLACK!"`, `"Comece agora"`, `"Treine com a gente"`
- **Casing:** Títulos em ALL CAPS (com a fonte MinhaFonte/Bebas); subtítulos e parágrafos em sentence case
- **Emoji:** NÃO são usados no site nem na comunicação textual
- **Slogan/lema:** *"Marcialidade, Compromisso e Respeito"*
- **CTA principal:** "Aula Experimental" — sempre com link para WhatsApp

### Exemplos de copy
- *"Você escolhe quantos dias quer treinar. SEM cobrança por modalidade. SEM turma fixa."*
- *"Somos uma empresa familiar, conduzida com dedicação..."*
- *"Formar não só lutadores, mas pessoas mais disciplinadas, resilientes e confiantes."*
- *"VEM SER BLACK!"*

---

## VISUAL FOUNDATIONS

### Cores
| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#161616` | Fundo base, preload screen |
| `--color-surface` | `rgba(61,61,61,0.80)` | Cards/containers (planos, horários, localização) |
| `--color-footer` | `#191a1d` | Footer, header com blur |
| `--color-accent` | `#c5db00` | Badges de planos (lime-yellow) — cor de identidade forte |
| `--color-cta-green` | `#1fc55c` | Botão WhatsApp / "Converse conosco" |
| `--color-cta-green-hover` | `#075e54` | Hover do botão WhatsApp |
| `--color-text-primary` | `#dddbdb` | Títulos, body principal |
| `--color-text-secondary` | `#b8b6b6` | Nav links, footer text |
| `--color-text-muted` | `#808080` | Labels, summaries, detalhes |
| `--color-overlay` | `#616161` | Menu mobile (overlay) |

### Tipografia
| Token | Fonte | Uso |
|---|---|---|
| `--font-brand` | `handelsonsix_cyr_six` | Logo "Black Horses", títulos principais (H1/H2 de seção) |
| `--font-display` | `BebasNeue` | Rótulos de seção, textos de link sobre fotos |
| `--font-body` | `Inter` | Nav, body text, horários, localização |
| `--font-ui` | `Roboto` | Botões, body alternativo |
| `--font-price` | `Nunito` | Preços, info de planos |
| `--font-script` | `KaushanScript` | Acentos decorativos (pouco uso) |

### Background e Texturas
- Fundo global: `Backgrounds/background_redux.png` em `repeat-y`, `background-size: 100%` — textura escura com padrão sutil
- Imagens hero: full-bleed, mask gradient para bottom (`linear-gradient(to bottom, black, transparent)`)
- Nenhum uso de gradientes coloridos — apenas gradientes pretos/sombras

### Espaçamento e Layout
- Sistema baseado em `vw` para desktop; `px` para mobile (`max-width: 768px`)
- Containers de cards: `width: 85–90%`, `margin: auto`, `border-radius: 4–5vw`
- Padding interno de seções: `2–4vw` top/bottom

### Bordas e Cantos
- Pills/CTAs: `border-radius: 5vw` (muito arredondado)
- Cards de informação: `border-radius: 4–5vw`
- Imagens de modalidades: `border-radius: 10%`
- Cards de horário (brancos): `border-radius: 0.6vw` (leve)

### Sombras
- Imagens/cards: `8px 8px 10px rgba(0,0,0,0.60)`
- Cards de horário: `10px 10px 20px rgba(2,2,0,0.95)` — sombra bem densa e escura
- CTAs/botões: `15px 18px 20px rgba(0,0,0,0.50)` — sombra "flutuante"

### Animações
- **Entrada:** `fadeInMove` (top→down, header), `fadeInLeft` (left→center, modalidades), `fadeInLeftPulse` (entra + pulsa, boxe card)
- **Loop:** `float` (CTA "Aula Experimental" — sobe/desce suavemente), `roletaTexto3` (texto rotativo em 3 frases), `shine` (brilho lateral no botão WhatsApp)
- **Reveal on scroll:** `.revelar` com IntersectionObserver — `opacity 0.8s ease, transform 0.8s ease`
- **Shimmer/reflexo:** `reflexoAlternado` no CTA dark — efeito de luz passando
- **Easing geral:** `ease-in-out`, `cubic-bezier(.8,.5,.2,1.4)` para hamburger

### Estados de Interação
- **Hover links nav:** `color: #ffffff`, `transform: scale(1.1)`, `transition: 0.3s ease`
- **Hover CTA WhatsApp:** `background-color: #075e54`
- **Hover CTA dark (aula experimental):** `filter: brightness(1.25)`, box-shadow suave
- **Hover imagens-link:** zoom-out do background (`background-size` diminui), overlay fica mais claro
- **Press/active:** sem shrink, sem estado ativo explícito

### Imagens
- Paleta quente, fotografias em ambiente de academia e competição
- Uso de `mask-image` para fundir imagens hero com o fundo
- `filter: brightness(0.6)` em imagens de subpáginas para criar contraste com texto

### Cards
- Fundo: `rgba(61,61,61,0.80)` semi-transparente sobre a textura
- Rounded corners grandes (pill para pills, 4-5vw para blocos)
- Sem borda explícita — apenas sombra

---

## ICONOGRAFIA

### Abordagem
- Ícones PNG flat style, sem bordas, fundo transparente
- Sem icon font ou SVG sprite — cada ícone é um PNG separado
- Origem: icons8.com (64×64px ou 96×96px)
- Apenas 2 SVGs nativos: `arrow-left.svg`, `arrow-right.svg`, `close.svg`

### Ícones disponíveis
| Arquivo | Uso |
|---|---|
| `assets/bhicon.png` | Favicon, loading screen |
| `assets/bhicon_transparent.png/.webp` | Logo no footer |
| `assets/icons/whatsapp_icon.png` | Botão WhatsApp, footer |
| `assets/icons/inst_icon.png` | Link Instagram, footer |
| `assets/icons/mail_icon.png` | Link Gmail, footer |
| `assets/icons/pix_icon.png` | Pagamento Pix |
| `assets/icons/visa_icon.png` | Pagamento Visa |
| `assets/icons/mastercard_icon.png` | Pagamento Mastercard |
| `assets/icons/elo_icon.png` | Pagamento Elo |
| `assets/icons/medal_icon.png` | Conquistas/atletas |
| `assets/icons/medal_icon_noborder.png` | Conquistas sem borda |
| `assets/icons/spaces/boxing_gloves.png` | Espaço de treino (boxe) |
| `assets/icons/spaces/gym.png` | Academia/musculação |
| `assets/icons/spaces/shower.png` | Vestiário |
| `assets/icons/spaces/coffee.png` | Copa/café |

---

## Índice de Arquivos

```
README.md                    — Este arquivo
SKILL.md                     — Skill para Claude Code
colors_and_type.css          — CSS vars (cores, tipografia, tokens)
fonts/                       — Arquivos de fonte TTF/OTF
assets/                      — Logos, imagens, ícones
  bhicon.png                 — Ícone da marca
  bhicon_transparent.webp    — Logo transparente (footer)
  Black_Horses_logo.png      — Logo completo
  blackhorses_text.webp      — Logo texto horizontal
  background_redux.png       — Textura de fundo
  wide_wb.webp               — Hero image equipe
  boxe_img.jpg               — Card modalidade Boxe
  hap_box.png                — Card modalidade Hapkido
  mt_box.webp                — Card modalidade Muay Thai
  photo_team.webp            — Foto equipe (Sobre)
  photo_atletas.webp         — Foto atletas
  photo_gym.webp             — Foto espaço
  icons/                     — Ícones de UI e social
  icons/spaces/              — Ícones de espaços da academia
preview/                     — Cards do Design System (Design System tab)
ui_kits/
  website/                   — UI Kit do site Black Horses
    index.html               — Protótipo interativo
    Header.jsx               — Componente de cabeçalho
    Footer.jsx               — Componente de rodapé
    HeroSection.jsx          — Hero com imagem full-bleed
    ModalidadesSection.jsx   — Cards das modalidades
    PlanosSection.jsx        — Seção de planos e preços
    HorariosSection.jsx      — Tabela de horários
```
