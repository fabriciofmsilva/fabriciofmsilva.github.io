# TODO — lacunas do `docs/PRD.md`

Cruzei todo o `docs/PRD.md` (Fases 1–11 + "O que eu evitaria" + paleta) contra o
que foi implementado nas Versões 1, 2 e 3 (blocos 1 e 2). Isto lista **só o que
ficou de fora** — itens já corrigidos como bug (excerpt/description quebrado,
h1 duplicado, dead code) e o item 6 (testes visuais automatizados) não estão
aqui, como combinado.

## Tipografia (Fase 2)

- [x] `h4`/`h5`/`h6` agora também usam `clamp()` em `_sass/_base.scss`.
- [x] Parágrafos de leitura (`.article-content p`, `.intro__bio`,
      `.recent__excerpt`) trocaram `max-width: 44rem` por `max-width: 70ch`.
- [-] Testar uma serifada só nos títulos — decisão da V1 foi não fazer, mas o
      PRD trata como algo a testar, não a descartar.
- [x] Auditoria de pesos: só 400/700 são carregados (Google Fonts). Achei três
      `font-weight: 200` (não carregado) em `.header-title`, `.archive-title` e
      `.archive__title` — corrigidos para `400`. De quebra, removi 4 variáveis
      Sass mortas (`$base-font-weight`, `$base-font-size`, `$title-font-size`,
      `$title-font-weight`, `$title-line-height`) do scaffold original do
      Minima, nunca referenciadas em lugar nenhum.
- [x] Legendas de imagem: `<figcaption>` opt-in via `image-caption` no front
      matter do post (`_layouts/post.html` + `.article-image__caption` em
      `_sass/_articles.scss`). Nenhum post atual usa o campo — a legenda só
      aparece quando o post define `image-caption`, não fabriquei texto pros
      9 existentes.

## Header (Fase 3)

- [-] "Reduzir o header durante a leitura" (encolher no scroll) — decisão
      deliberada da V1 de não fazer (documentada no plano), fica em aberto se
      quiser esse polish depois.

## Tema claro/escuro (Fase 4)

- [x] Blocos de código: os ~40 seletores do Rouge em `_sass/_highlight.scss`
      agora usam 15 novos tokens `--syntax-*` (`css/main.scss`) em vez de hex
      fixo. Como o fundo do código (`--code-background`) já é escuro nos dois
      temas do site (decisão da V1), não precisou de par claro/escuro — um
      único conjunto de cores calibrado pra fundo escuro, validado por
      contraste (mínimo 3.3:1, maioria acima de 6:1) contra os dois tons de
      fundo usados (`#20212A` e `#0B0C10`).
- [x] Contraste WCAG auditado — não com Lighthouse/axe (o `lighthousebot` do
      `package.json` está morto: depende de um serviço hospedado descontinuado
      há anos e não roda Chrome localmente), mas calculando a fórmula de
      contraste WCAG diretamente pra cada par texto/fundo dos tokens de cor,
      nos dois temas. Achado real: `--border` sozinho (~1.2–1.35:1) não
      bastava pra bordas de controles interativos (botões, input de busca,
      índice, menu mobile), que precisam de 3:1 (WCAG 1.4.11). Criei
      `--border-strong` (mesma família azul-acinzentada do site, calibrado
      pra exatamente 3:1 nos dois temas) e apliquei nos 7 lugares onde a
      borda delimita um controle — as divisórias decorativas (footer, header,
      seções) continuam com `--border`, que não precisa desse contraste.

## Home e arquivo (Fase 5)

- [x] "Artigos recentes" (`index.html`) e "Artigos relacionados"
      (`_layouts/post.html`) agora checam `post.link`/`related_post.link`,
      igual o loop de arquivo — testado com um post externo temporário nos
      dois lugares, renderiza com `class="link-external"` e `[externo]`
      corretamente.
- [-] "Destacar no máximo um ou dois textos principais" — decisão consciente
      de não fazer: o resultado atual (3 itens com o mesmo peso) já está bom,
      destacar um deixaria mais chamativo do que o tom sóbrio que se quer.

## Página de artigo (Fase 6)

- [x] Callouts: `.callout` com 3 variantes (`--note`/`--warning`/`--tip`),
      autoráveis direto no markdown via kramdown IAL em blockquote
      (`> texto\n{: .callout .callout--note}`), zero mudança de layout.
      Testado com um post temporário (removido depois).
- [x] Links anterior/próximo: `page.previous`/`page.next` (nativo do Jekyll,
      sem plugin) em `_layouts/post.html`. Testado: post mais recente só
      mostra "Anterior", o mais antigo só mostra "Próximo".
- [x] "Referências": estilizada via CSS estrutural (último `h2` de
      `.article-content` + a lista que vem depois) — funciona nos posts
      existentes sem editar o markdown deles. `ponytail:` assume que
      Referências é sempre o último `h2`; se algum post precisar de outro `h2`
      por último sem ser referências, aí sim precisa de um marcador explícito.
- [x] Encerramento simplificado — removi o botão "comentário" que chamava
      `loadDisqusComments()`, uma função que só existia dentro do bloco do
      Disqus **comentado** (ou seja, estava quebrado, clicar não fazia nada).
- [x] Indicador de atualização movido pra linha da data no cabeçalho
      (`· Atualizado em ...`, menor e com `--text-secondary`), não mais um
      parágrafo `[colchetes]` solto no rodapé.
- [x] **Item extra que você pediu**: giscus (já em uso, achei o
      `_includes/disqus.html` com Disqus comentado e giscus ativo) agora
      sincroniza tema com o toggle do site. Troquei a técnica do artigo que
      você mandou (recarregar o iframe via URL) pela API oficial do giscus
      (`postMessage` com `setConfig`), que não pisca. O tema inicial já sai
      certo do servidor (calculado via `localStorage` antes de injetar o
      script), e ao trocar o tema o toggle avisa o iframe em tempo real.
      Renomeei `_includes/disqus.html` → `_includes/comments.html` e tirei o
      bloco morto do Disqus.
- [x] De quebra, achei e corrigi `$grey-color` (`#828282`) — uma cor estática
      que nunca virou token de tema e falhava AA no tema claro (3.65:1,
      precisa 4.5:1). Usada em `.article-date`, `.archive-title`, `.footer` e
      no `.nav` do footer; troquei as 4 por `var(--text-secondary)` e removi
      as 3 variáveis Sass mortas (`$grey-color`, `$grey-color-light`,
      `$grey-color-dark`).

## Footer (Fase 9)

- [ ] "Destacar RSS" — o link RSS está no grupo Social junto com os outros,
      sem nenhum destaque visual próprio.
- [ ] Mercado Livre e Linktree continuam no footer (grupo "Mais") — o PRD pede
      pra remover links "redundantes ou pouco relacionados ao blog"; a V2
      optou por reagrupar em vez de remover (decisão registrada no plano, mas
      vale revisitar se ainda fazem sentido no site).

## Acessibilidade (Fase 10)

- [ ] `prefers-reduced-motion` — nenhuma regra no CSS (impacto baixo hoje, o
      site quase não tem animação/transição, mas o PRD pede explicitamente).
- [ ] Nenhuma página 404 customizada (`404.html`) — não existe no repositório.
- [ ] Zoom até 200% sem perda — nunca testado.
- [ ] Área clicável confortável — nunca auditado formalmente (tamanho dos
      `%btn-chip`, links do menu mobile etc.).
- [ ] `alt` de algumas imagens de capa é bem genérico (`"HTML"`, `"CSS"`,
      `"Wordpress"`) — descreve o tema, não a imagem em si.
- [ ] Lighthouse e axe (a ferramenta em si) nunca rodaram neste projeto — sem
      Chrome/Chromium neste ambiente, e o `lighthousebot` do `package.json`
      está morto (ver Fase 4). O contraste de cor já foi auditado por cálculo
      direto; o que falta é o resto do que Lighthouse/axe cobrem (performance
      real, outras regras de a11y automatizadas, etc.).
- [ ] RSS (`feed.xml`, via `jekyll-feed`) nunca foi validado manualmente.

## Performance e SEO (Fase 11)

- [ ] Fontes seguem via Google Fonts CDN (`preconnect` + `display=swap`
      adicionados na V3) — self-host e fontes variáveis foram descartados
      deliberadamente por custo/benefício, não implementados.
- [ ] Imagens continuam `.jpg`/`.jpeg` — sem WebP/AVIF com fallback.

## Paleta / detalhes visuais

- [ ] O `--brand-gradient` (azul→roxo) que o PRD sugere para detalhes mínimos
      (linha de 2–3px, indicador de artigo em destaque, detalhe da marca)
      nunca foi usado em lugar nenhum — os tokens de cor existem, mas sem essa
      aplicação específica.

## Achados à parte (não é lacuna do PRD, é limpeza pendente)

- [ ] `_layouts/shop.html` é código morto — nenhuma página usa `layout: shop`
      (`shop/index.html` usa `layout: default`). Achei isso no bloco 2 e deixei
      de fora por escopo.
- [ ] `.travis.yml` + o devDependency `lighthousebot` no `package.json` são
      resquício morto da era Travis CI: `lighthousebot` chama um serviço
      hospedado (`lighthouse-ci.appspot.com`) descontinuado há anos e precisa
      de uma API key que o projeto não tem. Não apaguei, só documentando o
      achado (mesmo padrão do `shop.html` acima).

## Tooling

- [ ] Alternativa para o lighthousebot, o que pdoemos usar? Lighthouse/axe?

---

Não incluído aqui, como combinado: bugs já corrigidos durante a implementação
(h1 duplicado no post, header ausente em About/Talks/Projetos, `page.excerpt`
sempre vazio quebrando description/OG/JSON-LD) e o item 6 do PRD (testes
visuais automatizados).
