---
layout: post
title: Introdução ao HTML
description: Introdução ao HTML
date: 2019-08-06 08:13:01
categories: frontend
tags: html
image: /img/post/generic.jpg
image-alt: HTML
---

> Tudo começa e termina no HTML
> <cite>Diego Eis</cite>

## O que é HTML?

HTML é a abreviação para <i lang="en">HyperText Markup Language</i> (Linguagem de Marcação e HiperTexto). Como o próprio nome diz ela serve para marcar conteúdo (adicionar semântica) e adicionar ligações (links) entre documentos.

No passado o <abbr title="World Wide Web Consortium">W3C</abbr> era o responsável pelos padrões do HTML, porém hoje ele é definido pelo **<abbr title="Web Hypertext Application Technology Working Group">WHATWG</abbr>**, uma organização formada pelos principais navegadores do mercado. No dia da publicação deste artigo a última versão é o HTML5.

O HTML foi criado por volta de 1991 pelo Sir Tim Berners-Lee no <abbr title="European Organization for Nuclear Research">CERN</abbr>, seu objetivo era criar uma forma de divulgar as pesquisas para seus colegas. A primeira versão oficial do HTML foi lançada no ano de 1993, já a segunda foi lançada em 1995. As versões 3 e 4 foram lançadas no mesmo ano, em 1997. Porém nos anos 2000 a W3C decidiu começar o XHTML, uma versão com regras mais restritas. Porém não concordando com os padrões XHTML o grupo WHATWG foi criado, depois de uma longa discussão nos anos 2019 o HTML5 acabou voltando a ser o padrão e o XHTML foi abandonado.


## Por que aprender HTML?

HTML é o coração da Web. Se você quer se aventurar no mundo de desenvolvimento Web, HTML é o ponto de partida. Como disse [Diego Eis](http://diegoeis.com/), <q>tudo começa e termina no HTML</q>. Caso você esteja interessado em trabalhar com front-end (lado do cliente), o HTML é a coisa mais importante que você deve dominar. Neste artigo vou apresentar os conceitos básicos da linguagem, vamos lá.


## Elementos (blocos de construção semanticos)

O HTML trabalha com um conjunto de elementos, cujo o objetivo é criar um significado **semântico** no conteúdo. Um elemento é formado por um conjunto de **tags** (veremos depois esse conceito) e o conteúdo que as **tags** delimitam.

{% highlight html %}
<html>
  <body>
    <p>Minha primeira página Web.</p>
  </body>
</html>
{% endhighlight %}

No exemplo acima temos 3 tags HTML, a `<html>`, `<body>` e `<p>`. Vamos começar explicando a tag `<p>`, seu conteúdo é o texto `Minha primeira página Web.`, marcando o texto com essa tag estamos dizendo ao navegador que esse texto é um parágrafo. Já a tag `<body>` tem como conteúdo a tag `<p>` e o seu texto. E finalmente a `<html>` tem o `<body>` e todos os seus filhos.


### Elementos em bloco e em linha

Elementos em blocos são exibidos pela largura toda do documento e ficam um abaixo do outro. Já os blocos em linha ocupam o tamanho do conteúdo que marca e ficam um após o outro.


## Tags (etiquetas)


{% highlight html %}
<p>Isso é texto dentro de um parágrafo.</p>
{% endhighlight %}


## Atributos

Os atributos normalmente consistem em duas partes, o nome do atributo e o seu valor.

{% highlight html %}
<input required="required">
{% endhighlight %}


## Comentários

Você pode criar um comentário no seu código que não será mostrado na página quando esta foi exibida no navegador. Comentários são úteis para explicar uma seção de marcação, auxiliar outras pessoas que forem dar manutenção na página, ou mesmo lembrar você futuramente. Para criar um comentário no HTML basta apenas usar a seguinte marcação:

{% highlight html %}
<!-- Aqui vai o seu comentário -->
{% endhighlight %}

Vale lembrar que o ideal é trabalhar com o mínimo de comentários possível. Ou seja, se você precisou explicar o código é porque o código pode estar complexo e pode ser melhorado.


## Estrutura básica de um documento

{% highlight html %}
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Olá, mundo!</title>
  </head>

  <body>
    <h1>Olá, mundo!</h1>
    <p>Minha primeira página Web.</p>
  </body>
</html>
{% endhighlight %}


### Doctype

A declaração `doctype` não é uma tag HTML, mas sim uma instrução para que o navegador saiba qual a versão do HTML que você utilizou para escrever a página. A declaração `doctype` deve estar na primeira linha do documento, antes mesmo da tag `<html>`.

A declaração `doctype` no HTML5 é muito simples.

{% highlight html %}
<!DOCTYPE html!>
{% endhighlight %}


### HTML

A **tag** `<html>` é primeira tag do documento. É ela quem diz que todo o conteúdo ali é uma página HTML.

{% highlight html %}
<html></html>
{% endhighlight %}


### Head

A **tag** `<head>` é onde vamos inserir todas as meta-informações para o nosso navegador, mecanismos de buscas, etc.

As informações inseridas aqui nem sempre vão ser mostradas para o usuário.

{% highlight html %}
<head></head>
{% endhighlight %}


#### Metatag Charset

{% highlight html %}
<meta charset="UTF-8">
{% endhighlight %}


### Body

Na **tag** `<body>` é onde vamos inserir todo o conteúdo 'visível' para o usuário.

{% highlight html %}
<body></body>
{% endhighlight %}


## Referências

- [Introdução ao HTML](https://developer.mozilla.org/pt-BR/docs/HTML/Introduction)
- [Guia Front-End](https://www.casadocodigo.com.br/pages/sumario-guia-frontend)
