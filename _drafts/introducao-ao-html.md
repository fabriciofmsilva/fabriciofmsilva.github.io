---
layout: post
title: Começando com HTML
description: Começando com HTML
date: 2016-10-06 00:00:01
categories: frontend
tags: html
image: /img/post/generic.jpg
image-alt: HTML
---
O que é HTML?
---

HTML é a abreviação para <i lang="en">HyperText Markup Language</i> (Linguagem de Marcação e HiperTexto). Como o próprio nome diz ela serve para marcar conteudo (adicionar semântica) e adicionar ligações (links) entre documentos.

Atualmente HTML é a linguagem mais utilizada na Web para desenvolver páginas e applicações Web. O HTML foi criado por volta de 1991 pelo Sir Tim Berners-Lee no CERN. O HTML foi baseado em SGML (Standard Generalized Markup Language).



Por que aprender HTML?
---

HTML é o coração da Web. Se você quer se aventurar no mundo de desenvolvimento Web HTML é o ponto de partida. Como disse Diego Eis <q>tudo começa e termina no HTML</q>.



Elementos
---

{% highlight html %}
<html>
  <body>
    <p>Minha primeira página Web.</p>
  </body>
</html>
{% endhighlight %}



Tags (Etiquetas)
---

{% highlight html %}
<p>Isso é texto dentro de um parágrafo.</p>
{% endhighlight %}



Atributos
---

{% highlight html %}
<input required="required">
{% endhighlight %}



Referências a caracteres com nome
--



Comentários
---

Você pode criar um comentário no seu código que não será mostrado na página quando esta foi exibida no navegador. Comentários são uteis para explicar uma seção de marcação, auxiliar outras pessoas que forem dar manutenção na página, ou mesmo lembrar você futuramente. Para criar um comentário no HTML basta apenas usar a seguinte marcação:

{% highlight html %}
<!-- Aqui vai o seu comentário -->
{% endhighlight %}

Vale lembrar que o ideal é trabalhar com o mínimo de comentários possível. Ou seja, se você precisou explicar o código é porque o código pode estar complexo e pode ser melhorado.



Estrutura básica de um documento
---

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

A **tag** `<html>` é primeira tag do documento.

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



Referências
---

- [Introdução ao HTML](https://developer.mozilla.org/pt-BR/docs/HTML/Introduction)
- [Guia Front-End](https://www.casadocodigo.com.br/pages/sumario-guia-frontend)
