+++
author = "André Lucas"
categories = ["Desenvolvimento Web"]
date = "2018-10-23T14:23:22-03:00"
disqus = false
hugo_image = "/images/uploads/2018/10/23/como-usar-o-strict-mode.jpeg"
tags = ["strict mode", "use strict", "modo estrito", "javascript", "programação"]
title = "O que o \"use strict' faz no JavaScript e por que ele existe"
url = "/o-que-o-use-strict-faz-no-javascript-e-por-que-ele-existe/"
youtube = ""

+++
Se você usa JavaScript em seus projetos ou em algum momento já leu um código de algum plugin na linguagem provavelmente já se deparou com uma linhazinha no início do documento que diz:

`use strict;`

O 'modo estrito', traduzindo, foi introduzido na linguagem na versão ECMAScript 5, então já tem um tempinho. Basicamente a opção nos possibilita colocar um programa ou uma função para que ela opere em modo estrito ('strict'). Esse contexto estrito previne algumas ações de serem tomadas e envia mais exceções. A linha `use strict` instrui o navegador para usar o modo Estrito, que é como se fosse uma versão mais segura e reduzida do JavaScript.

## Benefícios de utilizar o modo use strict

O modo estrito muda várias formas semânticas de funcionamento do JavaScript normal. O strict mode elimina alguns erros silenciosos que passariam batido do JavaScript e os faz emitir erros.

Além disso, essa forma corrige alguns erros que tornam o JavaScript difícil de ser otimizado, então algumas vezes os códigos no modo estrito rodam mais otimizados e velozes do que os códigos no 'modo normal'.

Uma outra questão interessante é que o modo strict proíbe algumas sintaxes (modo de escrever o código) que provavelmente serão descontinuadas em versões futuras do ECMAScript.

Em relação à segurança também é bem vantajoso se usar esse modo, pois ele também proíbe ou marca como um erro quando ações não seguras são realizadas pelo código. Um exemplo disso é quando se dá acesso ao objeto global.

Para iniciantes, em especial, o strict mode inclusive desabilita algumas funcionalidades que são confusas da linguagem, o que facilita bem dependendo do caso.

Em geral é basicamente uma forma mais segura de se escrever o JavaScript pois ele manda muito mais erros caso tente fazer algo não seguro, não otimizado ou não padrão.

Naturalmente, para quem já possui muita experiência com a linguagem poderá se aventurar em funções e funcionalidades que estão fora do modo estrito, mas recomendo para quem está aprendendo sempre utilizar.

## Como usar o Strict Mode

Há duas maneiras para se utilizar o `strict mode`.

1. Usado no escopo global para o script inteiro
2. Aplicado individualmente em funções específicas.

## Regras

Existem uma série grande de regras que se aplicam ao strict mode. Alguns exemplos:

* É necessário declarar todas as variáveis
* Não é possível deletar variáveis ou funções
* Duplicar o nome de um parâmetro dentro de uma função
* `eval` não pode ser o nome de uma variável
* `with` não pode ser utilizado
* `arguments` não pode ser o nome de uma variável

E muitas outras. Para ver uma lista mais completa acesse o link para a [documentação completa](https://www.w3schools.com/js/js_strict.asp).

Espero que essa explicação já tenha esclarecido um pouco como funciona essa declaração do `use strict;`. Esse artigo foi criado com base também nesse [outro artigo](https://www.geeksforgeeks.org/strict-mode-javascript/).

Se você é iniciante esse modo estrito vai te ajudar bastante inclusive para entender quais são as melhores práticas de escrita da linguagem. Se há algo no JavaScript que você tem dúvidas deixa nos comentários!

Divirta-se!