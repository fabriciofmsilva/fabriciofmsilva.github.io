---
layout: post
title:  "Google Prettify"
description: "Como instalar o Google Code Prettify como Syntax Highlighter"
date:   2013-07-25 18:41:12
categories: evento
tags: evento
image: http://www.fabriciofmsilva.com.br/img/2013/syntax-highlight.jpg
image-alt: Google Prettify - Syntax Highlight
---

Para fazer o <i lang="en" class="idiomatic" title="Destaque de sintaxe">syntax highlight</i> no blog irei usar o <a href="https://code.google.com/p/google-code-prettify/">Google Code Prettity</a>, um <strong>JavaScript</strong> que deixa o código mais legível e bonito.

Curta os exemplos com HTML, CSS e JavaScript.

##HTML

<pre class="lang-html prettyprint linenums">
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;pt-br&quot;&gt;
&lt;head&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;title&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  
&lt;/body&gt;
&lt;/html&gt;
</pre>

##CSS

<pre class="lang-css prettyprint linenums">
body {
  background-color: #d0e4fe;
}

h1 {
  color: orange;
  text-align: center;
}

p {
  font-family: &quot;Times New Roman&quot;;
  font-size: 20px;
}
</pre>

##JavaScript

<pre class="lang-js prettyprint linenums">
function myFunction() {
  alert(&quot;Hello World!&quot;);
}
</pre>

##Instalando o Google Prettify

Faça o <i lang="en" class="idiomatic">download</i> dos arquivos [prettify.js](http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.js) e [prettify.css](http://google-code-prettify.googlecode.com/svn/trunk/src/prettify.css).

Chame os arquivos no seu código <abbr title="HyperText Markup Language">HTML</abbr>.

<pre class="lang-html prettyprint linenums">
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;pt-br&quot;&gt;
&lt;head&gt;
  <!-- Insira o prettify.css dentro da tag head -->
  &lt;link rel=&quot;stylesheet&quot; href=&quot;prettify.css&quot;&gt;
&lt;/head&gt;
&lt;body&gt;
  <!-- Insira o prettify.js no final do documento, antes de fechar a tag body -->
  &lt;script type=&quot;text/javascript&quot; src=&quot;path/to/prettify.js&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

Depois de chamar os arquivos insira o código que chama o <strong>prettify.js</strong>

<pre class="lang-js prettyprint linenums">
jQuery(document).ready(function(){
  prettyPrint();
});
</pre>

###Inserindo um código

Para inserir um código basta usar a tag <code>&lt;pre&gt; &lt;/pre&gt;</code>

<pre class="lang-html prettyprint linenums">
&lt;pre class=&quot;prettyprint linenums&quot;&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Prettify.JS&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Olá mundo!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
&lt;/pre&gt;
</pre>