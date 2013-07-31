---
layout: post
title:  "Jekyll"
description: "Como instalar o Jekyll"
date:   2013-07-31 18:41:12
categories: evento
tags: evento
image: http://www.fabriciofmsilva.com.br/img/2013/jekyll.jpg
image-alt: Jekyll
---

Pra quem não conhece o [Jekyll](http://jekyllrb.com/), ele é um gerador de páginas estáticas desenvolvido em Ruby. Estou usando ele aqui para gerar o meu site.

##Instalando o Jekyll

Para instalar o Jekyll basta seguir os passos:

1. Instale o [Ruby](http://www.ruby-lang.org/en/downloads/)
2. Instale o [Ruby DevKit](http://rubyinstaller.org/add-ons/devkit/)
3. Instale o [Ruby Gems](http://rubygems.org/pages/download)
4. Instale o [Jekyll](http://jekyllrb.com/)

##Estrutura

<pre class="lang-html prettyprint linenums prettyprinted">
.
├── _config.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _site
└── index.html
</pre>

##Jekyll + GitHub Pages

Você pode publicar o seu site no [GitHub Pages](http://pages.github.com/).