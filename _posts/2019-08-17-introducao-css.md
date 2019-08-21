---
layout: post
title: Introdução ao CSS
description: Uma breve introdução ao CSS, passando pela sua história e conceitos básicos
date: 2019-08-17 09:41:00
categories: frontend
tags: css
image: /img/post/generic.jpg
image-alt: CSS
---

> Um minuto para aprender... uma vida para dominar.
> <cite>Othello</cite>

## Antes de começar

É importante que você tenha conhecimento sobre <abbr title="HyperText Markup Language">HTML</abbr> antes de começar com <abbr title="Cascading Style Sheet">CSS</abbr>. Isso não é um impeditivo, porém você terá um melhor aproveitamento, já que precisamos de um documento marcado com HTML para estilizar ele com CSS. Mas também podemos estilizar documentos <abbr title="Scalable Vector Graphics">SVG</abbr> ou <abbr title="eXtensible Markup Language">XML</abbr>.


## O que é CSS?

CSS é a abreviação para Cascading Style Sheet, em português Folha de Estilo em Cascata, é a linguagem usada para estilizar e criar layouts para páginas web. Com ela podemos alterar as fontes, cores, tamanhos dos blocos e espaçamentos, criar colunas e até adicionar animações. Antes do CSS ser criado os documentos eram usados como artigos acadêmicos, sem muita estilização. Junto com HTML, o CSS forma parte da tríade da Web.

Na versão 3.2 do HTML foi introduzida alguns atributos para estilizar o documento, como o `color`, `font` e `center`. Porém precisariamos adicionar **tag** por tag, e isso causava um problema quando precisavamos alterar as cores de um documento, por exemplo. Foi então que no dia 17 de dezembro de 1996, que Håkon Wium Lie e Bert Bos, publicaram a primeira espeficicação do CSS, conhecida como CSS Level 1 ou simplesmente CSS 1. Depois tivemos a versão CSS 2 em 1998. A partir da versão CSS 3, o CSS Working Group decidiu não trabalhar mais com versões e sim com módulos. Porém ainda existe o conceito de versão, que é a responsável por agrupar os módulos. A versão mais atual na data de publicação deste artigo é a CSS 4.


## Por que aprender CSS?

Sem CSS as páginas ficam com o design padrão dos navegadores, aplicando CSS nas páginas podemos criar os mais variados estilos e designs, deixando as páginas com mais vida. Um exemplo interessante disso é o site [CSS Zen Garden](http://www.csszengarden.com/), onde você tem uma estrutura HTML e pode aplicar o CSS como preferir, olhando os exemplos criados pela comunidade, você pode ver que nenhuma página se parece com a outra, mesmo usando a mesma estrutura HTML.


## Sintaxe CSS

{% highlight css %}
.class {
  font-size: 1rem;
  color: #333;
}
{% endhighlight %}


## Seletores

Usamos os seletores para capturar os elementos do documento HTML e aplicar os estilos nele.

### Element

Para selecionar uma tag usando o nome da **tag**.

{% highlight css %}
p {
  color: rebeccapurple;
}
{% endhighlight %}


### Classe

Para selecionar uma `class` usando o `.` na frente no nome da classe.

{% highlight css %}
.class {
  color: rebeccapurple;
}
{% endhighlight %}


### ID

Para selecionar um `id` usando a `#` na frente no nome do ID.

{% highlight css %}
#id {
  color: rebeccapurple;
}
{% endhighlight %}


### Seletores complexos

Podemos criar alguns seletores mais complexos combinando os anteriores.

{% highlight css %}
.header .title {
  color: rebeccapurple;
}
{% endhighlight %}

## Valores e unidades

Classificamos as unidades em dois tipos as fixas e as relativas.

Dentre as fixas podemos destacar o `px`.

Já nas relativas temos o `em`, `rem`, `%`.

## Cascata e herança

A primeira letra do CSS é Cascata.

{% highlight css %}
p {
  color: rebeccapurple;
}
{% endhighlight %}

## O modelo de caixa (box model)

O modelo básico de caixa CSS é o <em lang="en">box model</em>, ele leva em conta o tamanho do `container`, `padding`, `margin` e `border`.

## Display

Hoje temos alguns tipos de `display`s, vamos falar um pouco sobre os básicos.

O `display: block;` faz com que o bloco ocupe todo a largura da janela empurrando os próximos conteúdos para baixo. Como exemplos de `block` temos os elementos `div`, `article`, `header`, `footer`.

Já o `display: inline;` faz com que o bloco se comporte como uma palavra em uma linha. São exemplos as *tags* `span`, `em`, `strong`.

Podemos fazer um mix dos dois displays usando o `display: inline-block;`, aqui basicamente temos um elemento que se comporta como o `inline` porém aceita as mudanças do `margin` e `padding`.

Outro muito usado é o `display: none;`, usamos para esconder um elemento da tela e todos os seus filhos. Usando o `none` é como se o elemento não estivesse no <abbr title="Document Object Model">DOM</abbr>.

Temos outros tipos de `display` como `list-item`, `inline-table`, `table`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row`, `table-row-group`, `flex`, `inline-flex`, `grid`, `inline-grid`, `run-in`. Você pode conferir o que cada uma faz no link [display mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/display). Aqui o destaque fica com o `flex`, usado para trabalhar com o **flexbox** e o `grid`, usado para trabalhar com o **CSS Grid**, mas eles fogem do escopo deste artigo (num futuro quando criar os artigos coloco o link aqui).

E pra fechar ainda podemos usar a propriedade `inherit`, que faz com que o elemento herde o valor do pai.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="html,result" data-user="fabriciofmsilva" data-slug-hash="oNvYeXL" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Display">
  <span>See the Pen <a href="https://codepen.io/fabriciofmsilva/pen/oNvYeXL/">
  Display</a> by Fabrício Silva (<a href="https://codepen.io/fabriciofmsilva">@fabriciofmsilva</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Positioning

## Fontes

### Generic Family

### Font Family

## Cores

## Como utilizar o CSS no HTML

### Estilos em linha (inline styles)

{% highlight html %}
<!-- index.html -->
<div style="color: rebeccapurple;">Lorem ipsum</div>
{% endhighlight %}

### Usando a tag `style`

{% highlight html %}
<!-- index.html -->
<style>
.class {
  color: rebeccapurple;
}
</style>
{% endhighlight %}

### Usando a tag `link`

{% highlight html %}
<!-- index.html -->
<link rel="stylesheet" type="text/css" href="app.css">
{% endhighlight %}

{% highlight css %}
/* app.css */
.class {
  color: rebeccapurple;
}
{% endhighlight %}

## Exemplo

Aqui vamos estilizar o nosso portfólio que criamos no artigo sobre HTML.


## Referências

* [Introdução ao CSS](https://developer.mozilla.org/pt-BR/docs/Aprender/CSS/Introduction_to_CSS)
* [Learn CSS in 5 minutes - A tutorial for beginners](https://www.freecodecamp.org/news/get-started-with-css-in-5-minutes-e0804813fc3e/0)
* [Introduction to CSS](https://flaviocopes.com/css-introduction/)
