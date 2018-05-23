---
title: Qual a diferença entre URL, URI e URN
author: André Lucas
type: post
date: 2017-02-12T19:01:31-03:00
url: /qual-diferenca-entre-url-uri-e-urn/
featured_image: uploads/2017/02/iglu_diferenca_url_uri_urn
featured_image_extension: jpg
youtube: https://www.youtube.com/embed/vHa_cKryvnM
mvp_post_template:
  - def
mvp_featured_image:
  - hide
instant_articles_submission_id:
  - 1922216124664507
post_views_count:
  - 490
categories:
  - Desenvolvimento Web
tags:
  - diferença entre URI e URL
  - diferença entre url e uri
  - o que e uri
  - o que e url
  - uri
  - url
  - urn

---
<span class="embed-youtube" style="text-align:center; display: block;"></span>

Se você está constantemente navegando na internet já deve ter encontrado os termos URL, URI e URN por aí. Seja para copiar o endereço de um site para depois compartilhar ou mesmo no processo de criação de um website, acabamos vendo esses termos sendo usados. **Mas qual será a real diferença entre eles?** Em um lugar vemos URL. Outro URI. De vez em quando até o URN aparece.

Nesse artigo vou explicar então a real diferença entre eles e como eles se relacionam. Em caso de você ser um(a) programador(a) ou trabalhar com a web, é ainda mais importante saber distinguir bem esses conceitos.

## Explicações Prévias

Antes de mais nada, todos esses termos se referem ao endereço de uma determinada página na web. Isto é, aquilo que você olha no seu navegador a barra no topo com o nome do site junto com barras, números e símbolos. Exemplo: **http://facebook.com/seunome/d?=i134jk**

Talvez seja interessante também mencionar que quando buscamos por um endereço na web é como acessar arquivos dentro de uma pasta em um computador. A diferença é que a pasta que acessamos está em um computador enorme (servidor) em uma localização remota cheio de outros computadores (datacenter). Então para que a internet saiba onde acessar quando digitamos o endereço **igluonline.com** no navegador, cada servidor possui uma identificação única na web.

**Resumo:** As URIs identificam e as URL localizam, mas localizadores também são identificadores de forma que toda URL também é uma URI mas há URIs que não são URLs.

## URI

As URIs são o padrão para identificação de documentos com uma curta sequência de números, letras e símbolos. O termo significa no Inglês Uniform Resource Identifier (URI) &#8211; Identificador de Recurso Uniforme.

## URL

URLs também seguem uma nomenclatura similar. Significa Uniform Resource Locator &#8211; Localizador de Recurso Uniforme. **Nesses endereços contém informações sobre como buscar um recurso em sua localização**.

Quando falamos de recursos a serem buscados podem ser tanto websites completos (igual esse que você está acessando agora) quanto outros tipos de dados que são transmitidos via web em outros formatos e por meio de outros protocolos que não HTTP ou HTTPS.

Exemplo:

  * http://website.com/pagina.html
  * ftp://website.com.br/download.zip
  * mailto:contato@website.com.br
  * file:///home/usuario/arquivo.txt
  * tel:+5511123456789
  * https://exemplo.com/recurso?bla=blu#algoaqui

URLs sempre começam com um protocolo (http, ftp, etc) e normalmente possuem informações sobre a nome da rede hospedeira (website.com). Também costumam ter um caminho dentro dos arquivos (/paginas/categoria/artigo.html). Por fim, as URLs podem ter também parâmetros e fragmentos de identificação (?bla=blu, #link, etc).

## URN

URN então, seguindo o mesmo padrão dos dois anteriores, significa Uniform Resource Name &#8211; Nome de Recurso Uniforme. Ele identifica um recurso na web através de um nome único e persistente, mas não necessariamente ele informa onde o localizar na internet. Normalmente começa com o prefixo **urn:**.

Por exemplo:

  * urn:isbn:042424553 para identificar um livro através de seu número ISBN
  * urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66 como un identificador global único
  * urn:publishing:book como um XML que identifica um documento como um tipo de livro

URNs podem identificar ideias e conceitos. Eles não estão restritos a documentos, mas quando eles representam documentos podem ser convertidos a URLs por um &#8220;resolver&#8221;. A partir daí o documento pode ser baixado através de uma URL.

## Exemplo com analogia

  * André Lucas

Esse é o meu nome e é um identificador. Ele é como uma URI mas não pode ser uma URL pois não diz nada sobre como me localizar ou me contactar. Então existem centenas ou milhares de outros André Lucas no Brasil.

  * Rua Bla Blu, n° 123, cidade tal

Esse é um localizador, que também é um identificador para uma determinada localização física. **Dessa forma ele é tanto um localizador quanto um identificador.**

O termo URL é muito usado incorretamente por sua popularidade em determinados serviços e produtos, então muitas vezes é preciso tomar cuidado para que não se use URL no lugar de URI.

##

Se você gostou então aproveite para se inscrever em nosso <a href="https://www.youtube.com/channel/UCybl6LOBsIJ6R5dXUdbmmXA" target="_blank">canal no YouTube</a> para mais tutoriais como esse. Também estamos ativos no <a href="https://www.facebook.com/igluonline" target="_blank">Facebook</a> e no [Google +][1]!

Divirta-se!

 [1]: http://plus.google.com/u/0/collection/0TVuZ
