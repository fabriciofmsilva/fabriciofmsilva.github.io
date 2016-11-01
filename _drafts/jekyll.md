---
layout: post
title:  Jekyll
description: Como instalar o Jekyll
date: 2016-10-06 00:00:04
categories: tool
tags: jekyll
image: /img/post/generic.jpg
image-alt: Jekyll
---
Pra quem não conhece o [Jekyll](http://jekyllrb.com/), ele é um gerador de páginas estáticas desenvolvido em Ruby. Estou usando ele aqui para gerar o meu site.



Instalando o Jekyll
---

Para instalar o Jekyll basta seguir os passos:

1. Instale o [Ruby](http://www.ruby-lang.org/en/downloads/);
2. Instale o [Ruby DevKit](http://rubyinstaller.org/add-ons/devkit/);
3. Instale o [Ruby Gems](http://rubygems.org/pages/download);
4. Instale o [Jekyll](http://jekyllrb.com/).



Estrutura básica
---

{% highlight diretory %}
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
{% endhighlight %}


### _config.yml

Armazena dados de configuração.


### _drafts

Rascunhos de postagens. Não são publicadas.


### _includes

Você pode definir parte de códigos para ser usada nas páginas.


### _layouts

Templates das páginas que serão geradas.


### _posts

Aqui ficam as postagens.


### _site

Local onde os arquivos gerados pelo Jekyll serão colocados.


### index.html

Página inicial do site.



Criando páginas
---

Para criar uma página você pode criar um arquivo HTML (por exemplo `sobre.html`) e depois coloca-lo na raiz da aplicação, ou criar uma pasta e colocar um arquivo `index.html` dentro dela, prefiro a segunda forma.



Criando uma postagem
---

As postagens são inseridas dentro da pasta _posts, os arquivos devem ser criados seguindo o modelo ANO-MES-DIA-titulo.MARKUP, você pode usar tanto [Markdown](http://daringfireball.net/projects/markdown/) quanto [Textile](http://textile.sitemonks.com/).



Jekyll + GitHub Pages
---

Você pode publicar o seu site no [GitHub Pages](http://pages.github.com/).
