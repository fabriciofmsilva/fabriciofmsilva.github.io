---
layout: post
title: Introdução ao CSS
description: Uma breve introdução ao CSS, passando pela sua história e conceitos básicos
date: 2019-08-17 09:41:00
last-update: 2019-08-21 08:45:01
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

A sintaxe do CSS segue a seguinte estrutura, primeiro temos o _seletor_ no nosso exemplo abaixo é o `.title`, depois temos as _declarações_ tudo o que está entre `{}`. Na declaração temos várias _regras_ (`propriedade: valor;`), que são compostas por uma _propriedade_ (`font-size`) e um _valor_ (`2rem`). Para separar a propriedade do valor usamos o `:` e toda regra deve terminar com um `;`.

{% highlight css %}
.title {
  font-size: 2rem;
  color: rebeccapurple;
}

.text {
  font-size: 2rem;
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

.main > .title {
  color: #333;
}

.article > p {
  font-size: 1.2rem;
}

.article ~ .footer {
  margin-top: 1rem;
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

Você pode conferir outros tipos de `display` no [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/display). Aqui o destaque fica com o `flex`, usado para trabalhar com o **flexbox** e o `grid`, usado para trabalhar com o **CSS Grid**, mas eles fogem do escopo deste artigo (num futuro quando criar os artigos coloco o link aqui).

E pra fechar ainda podemos usar a propriedade `inherit`, que faz com que o elemento herde o valor do pai.


## Positioning

Os elementos seguem um padrão na exibição quando renderizados no DOM. Porém podemos usar a propriedade `position` para modificar esse comportamento. Por padrão a maioria dos elementos tem o `position: static;`, isso faz com que eles se mantenham no fluxo da página.

Vamos começar com o `position: relative;`, esse position mantém o elemento na posição inicial dele, porém podemos usar as propriedades `top`, `right`, `bottom`, `left` e `z-index` para alterar a posição incial do elemento.

Já o `position: absolute;` retira o elemento do fluxo e usando as propriedades `top`, `right`, `bottom`, `left` e `z-index` podemos mover os elementos para outras posições. Porém o position absolute fica posicionado a partir de um ancestral com position relative, caso nenhum ancestral tenha ele fica positionado relativo ao body (document).

O `position: fixed;` é parecido com o absolute com a diferença que ele fica posicionado em relação a janela do navegador (`window`), com isso se você fizer uma rolagem (scroll) o elemento posicionado com static vai fazer o scroll junto.

Por fim o mais novo membro da família o `position: sticky;` ele serve para travar um elemento geralmente no topo da página quando um scroll é feito.


## Como utilizar o CSS no HTML

### Estilos em linha (inline styles)

Podemos inserir os estilos diretamente na tag com o atributo `style` que queremos capturar, porém aqui teremos os mesmos problemas que tinhamos com os atributos de estilo das versões mais antigas do HTML.

{% highlight html %}
<!-- index.html -->
<div style="color: rebeccapurple;">Lorem ipsum</div>
{% endhighlight %}

### Usando a tag `style`

Uma segunda opção já um pouco melhor é colocar o CSS dentro da tag `style`, pois assim podemos aplicar todos os estilos para uma página. E quando dois ou mais elementos usar a mesma regra ela já será replicada. O ideal é que essa tag seja inserida dentro do `<head>`.

{% highlight html %}
<!-- index.html -->
<style>
.class {
  color: rebeccapurple;
}
</style>
{% endhighlight %}

### Usando a tag `link`

A técnica anterior tem a limitação de apenas servir o CSS para uma única página, caso você precise do mesmo estilo em mais uma página o ideal é colocar os estilos em um arquivo separado e usar a tag `link` para dizer qual arquivo CSS você quer carregar na página. Assim como a tag `style` devemos inserir a tag `<link>` no `<head>`.

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
