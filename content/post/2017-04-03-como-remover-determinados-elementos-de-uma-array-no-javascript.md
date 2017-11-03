---
title: Como remover determinados elementos de uma array no JavaScript
author: André Lucas
type: post
date: 2017-04-03T19:53:16+00:00
url: /como-remover-determinados-elementos-de-uma-array-no-javascript/
featured_image: uploads/2017/04/pexels-photo-160107
featured_image_extension: jpeg
mvp_post_template:
  - def
mvp_featured_image:
  - hide
post_views_count:
  - 213
categories:
  - Desenvolvimento Web

---
Imagine que você criou sua Array no JavaScript e agora precisa remover um determinado elemento dessa Array. Nesse breve artigo vamos ver como remover um determinado elemento de uma Array sabendo apenas qual elemento e não aonde ele está.

Depois que utilizamos algo como o `.push(elemento)` para adicionar elementos na Array, infelizmente não há algo como `.remove(elemento)` para tirar ele depois a não ser que esteja ou no início `.shift()` ou no final `.pop()`

<a href="https://www.igluonline.com/categories/desenvolvimento-web/" target="_blank">Confira também nossos outros artigos sobre desenvolvimento web e programação.</a>

## Navegadores Modernos

A primeira solução aqui é para navegadores do Internet Explorer 9 para cima, então não será suportada para IE 8 pra baixo.

A primeira coisa que precisamos fazer é determinar qual é o index do elemento que queremos remover.

Por exemplo, se tivermos uma Array com os números 2, 4, 5, 7 e 8 e queremos remover o 7.

`var array = [2, 4, 5, 7, 8];`

Podemos utilizar o método `indexOf()` para descobrir em qual lugar a array está.

`var index = array.indexOf(7);`

Em seguida podemos utilizar o método `splice()` para remover o elemento.

    if ( index > -1) {

      array.splice(index, 1);

    }

Note que primeiro adicionamos uma condicional para determinar que o elemento buscado existe de fato na Array.

Além disso, o segundo parâmetro pedido no `splice` é o número de elementos a remover. O `splice` modifica a array original e retorna uma nova array contendo os elementos que foram removidos.

## Navegadores antigos com Polyfill

Se o seu projeto necessitar o suporte a browsers antigos, sugiro o uso de `Polyfill` para criar a funcionalidade do `indexOf()`.

Seguindo <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill" target="_blank">esse artigo</a>, temos o seguinte prototype para criar a função desse método.

	Array.prototype.indexOf || (Array.prototype.indexOf = function(d, e) {
	var a;
	if (null == this) throw new TypeError('"this" is null or not defined');
	var c = Object(this),
		b = c.length >>> 0;
	if (0 === b) return -1;
	a = +e || 0;
	Infinity === Math.abs(a) && (a = 0);
	if (a >= b) return -1;
	for (a = Math.max(0 <= a ? a : b - Math.abs(a), 0); a < b;) {
		if (a in c && c[a] === d) return a;
		a++
	}
	return -1
	});

Dessa forma os navegadores antigos conseguem suportar algumas funções mais novas.

## Conclusão

Então vimos aqui que a forma mais simples de se remover elementos de uma Array no JavaScript é através do método `indexOf()` para encontrar onde está o elemento desejado no meio da Array. Depois podemos fazer o uso do `splice()` para rapidamente remover esse elemento.

&nbsp;

Se você gostou então aproveite para se inscrever em nosso <a href="https://www.youtube.com/channel/UCybl6LOBsIJ6R5dXUdbmmXA" target="_blank">canal no YouTube</a> para mais tutoriais como esse. Também estamos ativos no <a href="https://www.facebook.com/igluonline" target="_blank">Facebook</a> e no [Google +][1]!

Divirta-se!

 [1]: http://plus.google.com/u/0/collection/0TVuZ
